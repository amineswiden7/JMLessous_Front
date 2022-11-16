import { Component, OnInit } from '@angular/core';

import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { CreditLibre } from 'src/app/models/credit-libre';
import { Garantie } from 'src/app/models/garantie';
import { Utilisateur } from 'src/app/models/utilisateur';

import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { GarantieService } from 'src/app/services/garantie.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-ajout-credit-libre',
  templateUrl: './ajout-credit-libre.component.html',
  styleUrls: ['./ajout-credit-libre.component.css']
})
export class AjoutCreditLibreComponent implements OnInit {

  creditLibre=new CreditLibre();
  idUser:any;
  idGarantie:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  listG:Garantie[];
  listU:Utilisateur[];
  constructor(private ngWizardService: NgWizardService, private creditLibreService:CreditLibreService, private garantieS:GarantieService, private userS:UserService) {
  }
  ngOnInit() {
    this.garantieS.listGarantie().subscribe(res=>{console.log(res); this.listG=res});
    this.userS.getAllUser().subscribe(res=>{console.log(res); this.listU=res});
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }

  addCredit(){
    this.creditLibreService.createCredit(this.creditLibre,this.idUser,this.idGarantie).subscribe(res=>{
      console.log(this.creditLibre);
      console.log(this.idUser);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
 }

}
