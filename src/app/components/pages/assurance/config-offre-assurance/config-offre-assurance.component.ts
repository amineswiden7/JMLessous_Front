import {Component, Input, OnInit} from '@angular/core';
import {NgWizardConfig, NgWizardService, STEP_STATE, StepChangedArgs, THEME} from 'ng-wizard';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {OffreAssurance} from '../../../models/offre-assurance';
import {ScoreBonus} from '../../../models/score-bonus';
import {ScorePuiss} from '../../../models/score-puiss';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreAssuranceService} from '../../../../services/assurance/offre-assurance.service';
import {devServerTargetSpec} from '@angular-devkit/build-angular/src/test-utils';
import {MatFormField} from '@angular/material';

@Component({
  selector: 'app-config-offre-assurance',
  templateUrl: './config-offre-assurance.component.html',
  styleUrls: ['./config-offre-assurance.component.css']
})
export class ConfigOffreAssuranceComponent implements OnInit {

  // offreAsuurance: OffreAssurance;
  nbreAssur: number;
  nbreSin: number;
  coutSin: number;
  nbreAnnees: number;
  facteurPareto: number;
  idOffre: any;
  acceptation = false;
  step = 'first';
  valid = 0;
  firstF = new FormGroup(
    {
      nbreAssur: new FormControl(),
      nbreSin: new FormControl(),
      coutSin: new FormControl()
    }
  );
  firstFRC = new FormGroup(
    {
      nbreAnnees: new FormControl(),
      nbreSin: new FormControl(),
      facteurPareto: new FormControl(),
      coutSin: new FormControl()
    }
  );
  firstFV = new FormGroup(
    {
      interet: new FormControl()
    }
  );
  secondFV = new FormGroup(
    {
      primePure: new FormControl()
    }
  );
  seconF = new FormGroup(
    {interFlex: new FormControl()}
  );
  thirdF = new FormGroup(
    {
      scoreHomme: new FormControl(),
      scoreFemme: new FormControl(),
      scoreCircMin: new FormControl(),
      scoreCircMax: new FormControl(),
      scoreValMin: new FormControl(),
      scoreValMax: new FormControl(),
      b1: new FormControl(),
      b2: new FormControl(),
      b3: new FormControl(),
      b4: new FormControl(),
      b5: new FormControl(),
      b6: new FormControl(),
      b7: new FormControl(),
      b8: new FormControl(),
      b9: new FormControl(),
      b10: new FormControl(),
      b11: new FormControl(),
      b12: new FormControl(),
      cv2: new FormControl(),
      cv3: new FormControl(),
      cv4: new FormControl(),
      cv5: new FormControl(),
      cv6: new FormControl(),
      cv7: new FormControl(),
      cv8: new FormControl(),
      cv9: new FormControl(),
      cv10: new FormControl(),
      cv11: new FormControl(),
      cv12: new FormControl(),
      cv13: new FormControl(),
      cv14: new FormControl(),
      cv15p: new FormControl(),
    }
  );
  thirdFH = new FormGroup(
    {
      scoreHomme: new FormControl(),
      scoreFemme: new FormControl(),
      scoreCircMin: new FormControl(),
      scoreCircMax: new FormControl(),
      scoreValMin: new FormControl(),
      scoreValMax: new FormControl(),
    }
  );
  thirdFV = new FormGroup(
    {
      minAge: new FormControl(),
      maxAge: new FormControl(),
      minPeriode: new FormControl(),
      maxPeriode: new FormControl()
    }
  );
  forthF = new FormGroup(
    {
      commission: new FormControl(),
      lienForm: new FormControl(),
    }
  );
  @Input() offreAssurance = {
    idOffreAssurance: null,
    primePure: null,
    interFlex: null,
    scoreHomme: null,
    scoreFemme: null,
    scoreCircMin: null,
    scoreCircMax: null,
    scoreValMin: null,
    scoreValMax: null,
    scoreBonus: {
      b1: null,
      b2: null,
      b3: null,
      b4: null,
      b5: null,
      b6: null,
      b7: null,
      b8: null,
      b9: null,
      b10: null,
      b11: null,
      b12: null
    },
    scorePuissance: {
      cv2: null,
      cv3: null,
      cv4: null,
      cv5: null,
      cv6: null,
      cv7: null,
      cv8: null,
      cv9: null,
      cv10: null,
      cv11: null,
      cv12: null,
      cv13: null,
      cv14: null,
      cv15p: null,
    },
    commission: null,
    gainTotal: 0,
    nbreContrats: 0,
    type: null,
    categorie: null,
    image: null,
    description: null,
    shortDescription: null,
    assurance: null,
    typePeriode: null,
    minAge: null,
    maxAge: null,
    interet: null,
    minPeriode: null,
    maxPeriode: null,
    lienForm: null,
    lienLogo: null,
    seuilCouv: null,
    statut : 'VALIDATION'
  };

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
              public router: Router) {
  }
  ngOnInit(): void {
    this.idOffre = this.route.snapshot.params['id'];
    this.loadOffre(this.idOffre);
  }
  showPreviousStep(_event?: Event): void {

    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event): void {
    this.ngWizardService.next();
  }
  nextAction(): void{
    if (this.step === 'first') {
      if (this.firstF.valid || this.firstFRC.valid || this.firstFV.valid){
        this.ngWizardService.next();
      }
      else {
        alert('Veuillez renseigner toutes les informations demandées correctement.');
      }
    }
    if (this.step === 'second') {
      if (this.seconF.valid || this.secondFV.valid){
        this.ngWizardService.next();
      }
      else {
        alert('Veuillez renseigner toutes les informations demandées correctement.');
      }
    }
    if (this.step === 'third') {
      if (this.thirdF.valid || this.thirdFH.valid || this.thirdFV.valid){
        this.ngWizardService.next();
      }
      else {
        alert('Veuillez renseigner toutes les informations demandées correctement.');
      }
    }
    if (this.step === 'final') {
      if (this.forthF.valid){
        if (this.acceptation === true){
          if (this.offreAssurance.categorie === 'AUTOMOBILE' || this.offreAssurance.categorie === 'HABITATION') {
            this.offreAssurance.primePure = this.coutSin / this.nbreAssur;
          }
          if (this.offreAssurance.categorie === 'RESPONSABILITE_CIVILE'){
            this.offreAssurance.primePure =
              ((this.nbreSin / this.nbreAnnees) * ((this.facteurPareto * this.coutSin) / (this.facteurPareto - 1)));
            this.offreAssurance.seuilCouv = this.coutSin;
          }
          this.service.updateOffreAssurance(this.offreAssurance).subscribe(data => {
            this.router.navigate(['/offres-assureurs']);
          }, error => {console.log(error); });
          console.log(this.offreAssurance);
        }
        else{
          alert('Vous devez accepter l\'engagement juridique de l\'enregistrement de l\'offre');
        }
      }
      else {
        alert('Veuillez renseigner toutes les informations demandées correctement.');
      }
    }
  }

  prevAction(): void{
    this.ngWizardService.previous();
  }
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
      if (_args.step.description === 'Simulateur') {
      this.step = 'third';
      }
      else {
        this.step = 'second';
      }
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
        this.offreAssurance.idOffreAssurance = data.idOffreAssurance;
        this.offreAssurance.type = data.type;
        this.offreAssurance.categorie = data.categorie;
        this.offreAssurance.image = data.image;
        this.offreAssurance.description = data.description;
        this.offreAssurance.shortDescription = data.shortDescription;
        this.offreAssurance.assurance = data.assurance;
        this.offreAssurance.typePeriode = data.typePeriode;
        this.offreAssurance.lienLogo = data.lienLogo;
        this.offreAssurance.gainTotal = data.gainTotal;
        console.log(this.offreAssurance);
      }
    );
  }

}
