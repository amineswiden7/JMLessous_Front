import { Component, OnInit } from '@angular/core';

import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { CreditLibre } from 'src/app/models/credit-libre';
import { Garantie } from 'src/app/models/garantie';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/services/auth.service';

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
  cred=new CreditLibre();
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
 garantie=new Garantie();
  constructor(private ngWizardService: NgWizardService, private userConnecte: UserService , private creditLibreService:CreditLibreService, private garantieS:GarantieService, private userS:UserService) {
  }
  ngOnInit() {
    //this.garantieS.listGarantie().subscribe(res=>{console.log(res); this.listG=res});
    //this.userS.getAllUser().subscribe(res=>{console.log(res); this.listU=res});
    //this.userConnecte.findUserWithToken();
   
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }

  addCredit(){
    console.log(this.creditLibre);
    //this.garantie.credit=this.creditLibre;
   // this.creditLibre.garantie=this.garantie;
    //console.log(this.creditLibre.garantie);
    
    this.creditLibreService.createCredit(this.creditLibre,this.garantie.valeur,this.garantie.type,this.userConnecte.activeUser.idUser).subscribe(res=>{
      console.log(this.creditLibre);
      console.log(res); 
      this.isSuccessful = true;
      this.garantie.credit=res;
        this.isSignUpFailed = false;
        
        //window.location.reload();

    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
    
    //this.garantieS.createGarantie(this.garantie).subscribe(res=>{console.log(res);});
 }

}
