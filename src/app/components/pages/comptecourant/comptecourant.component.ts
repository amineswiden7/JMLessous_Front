import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgWizardConfig, NgWizardModule,NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { CompteCourant } from 'src/app/models/compte-courant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ComptecourantService } from 'src/app/services/compte/comptecourant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comptecourant',
  templateUrl: './comptecourant.component.html',
  styleUrls: ['./comptecourant.component.css']
})
export class ComptecourantComponent implements OnInit {
  comptecourant=new CompteCourant();
  idUser:any;
  Utilisateur:Utilisateur;
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

  constructor(private ngWizardService: NgWizardService,private comptecourantService:ComptecourantService
    ,private UserService:UserService
    ,private router: Router,
    private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.idUser=1;
   
      this.UserService.getUser(this.idUser).subscribe(res=>{  
        this.Utilisateur=res;
        console.log(this.Utilisateur);
      },
      error => console.log(error));
     
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }

  addCompte(){
    console.log(this.comptecourant);
    this.comptecourantService.addCompteC(this.comptecourant,this.idUser).subscribe(data=> {
      console.log(data);
    },
    error => console.log(error));
 }
 goToUserCompte(){
  this.router.navigate(['usercompte']);
  }
}
