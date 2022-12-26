import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgWizardConfig, NgWizardService, STEP_STATE, StepChangedArgs, THEME} from 'ng-wizard';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreAssuranceService} from '../../../../services/assurance/offre-assurance.service';
import {OffreAssurance} from '../../../models/offre-assurance';
import {ContratAssurance} from '../../../models/contrat-assurance';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contract-registration',
  templateUrl: './contract-registration.component.html',
  styleUrls: ['./contract-registration.component.css']
})
export class ContractRegistrationComponent implements OnInit {

  step = 'first';
  idOffre: any;
  valid = 0;
  prime = 0;
  link = '';
  urlSafe: SafeResourceUrl;
  contrat: ContratAssurance = new ContratAssurance();
  params = {
    id: null,
    sexe: null,
    valeurVoit: 6000,
    nbreCirc: 0,
    puissance: null,
    classe: null
  };
  firstF = new FormGroup(
    {
      sexe: new FormControl(),
      valeurVoit: new FormControl(),
      nbreCirc: new FormControl(),
      puissance: new FormControl(),
      classe: new FormControl()
    }
  );
  seconF = new FormGroup(
    {
      dateDebut: new FormControl(),
      dateFin: new FormControl(),
      nomPrenomAssure: new FormControl(),
      cinAssure: new FormControl(),
      telAssure: new FormControl(),
      emailAssure: new FormControl(),
    }
  );
  offreAssurance: OffreAssurance;

  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings : {
      showNextButton : false,
      showPreviousButton : false,
      toolbarExtraButtons: [
        { text: 'Réinitialiser', class: 'btn btn-danger', event: () => { this.ngWizardService.reset(); } },
        { text: 'Suivant', class: 'btn btn-primary', event: () => { this.nextAction(); } }
      ],
    }
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  constructor(private ngWizardService: NgWizardService, private route: ActivatedRoute, private service: OffreAssuranceService,
              public router: Router, public sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.idOffre = this.route.snapshot.params['id'];
    this.params.id = this.idOffre;
    this.loadOffre(this.idOffre);
    this.contrat.statut = 'PENDING';
  }

  nextAction(): void{
    if (this.step === 'first') {
      if (this.firstF.valid){
        this.service.calculatePrimeAut(this.params).subscribe(
          res => {
            this.prime = res;
            this.ngWizardService.next();
          }
        );
      }
      else {
        alert('Veuillez renseigner toutes les informations demandées correctement.');
      }
    }
    if (this.step === 'second') {
      this.contrat.prime = this.prime;
      this.ngWizardService.next();
    }
    if (this.step === 'final') {
      if (this.seconF.valid){
        this.service.saveContract(this.contrat, 1, this.offreAssurance.idOffreAssurance).subscribe(data => {
          this.router.navigate(['/offre-assurance']);
        });
      }
      else {
        alert('Veuillez renseigner toutes les informations demandées correctement.');
      }
    }
  }

  prevAction(): void{
    this.ngWizardService.previous();
  }
  // tslint:disable-next-line:variable-name
  stepChanged(_args: StepChangedArgs): void {
    if (_args.position === 'final'){
      this.step = 'final';
      this.defaultconfig.toolbarSettings.toolbarExtraButtons = [
        { text: 'Réinitialiser', class: 'btn btn-danger', event: () => { this.ngWizardService.reset(); } },
        { text: 'Retour', class: 'btn btn-info', event: () => { this.prevAction(); } },
        { text: 'Enregistrer', class: 'btn btn-primary', event: () => { this.nextAction(); } }
      ];
    }
    else if (_args.position === 'first'){
      this.step = 'first';
      this.defaultconfig.toolbarSettings.toolbarExtraButtons = [
        { text: 'Réinitialiser', class: 'btn btn-danger', event: () => { this.ngWizardService.reset(); } },
        { text: 'Suivant', class: 'btn btn-primary', event: () => { this.nextAction(); } }
      ];
    }
    else{
      this.step = 'second';
      this.defaultconfig.toolbarSettings.toolbarExtraButtons = [
        { text: 'Réinitialiser', class: 'btn btn-danger', event: () => { this.ngWizardService.reset(); } },
        { text: 'Retour', class: 'btn btn-info', event: () => { this.prevAction(); } },
        { text: 'Suivant', class: 'btn btn-primary', event: () => { this.nextAction(); } }
      ];
    }
  }

  loadOffre(id: any): void {
    this.service.getOffreById(id).subscribe(
      data => {
        this.offreAssurance = data;
        this.params.id = this.offreAssurance.idOffreAssurance;
        this.contrat.categorie = this.offreAssurance.categorie;
        this.contrat.type = this.offreAssurance.type;
        this.contrat.commission = this.offreAssurance.commission;
        this.contrat.regulated = false;
        this.link = this.offreAssurance.lienForm + '&embedded=true';
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
      }
    );
  }

}
