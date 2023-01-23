import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { Absence } from 'src/app/models/absence';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AbsenceService } from 'src/app/services/absence/absence.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.component.html',
  styleUrls: ['./create-absence.component.css']
})
export class CreateAbsenceComponent implements OnInit {
  Absence=new Absence();
  idUser:any;
  
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
  listU:Utilisateur[];

  constructor(private ngWizardService: NgWizardService, private absenceService:AbsenceService, private userS:UserService) { }

  ngOnInit(): void {
    this.userS.getAllUser().subscribe(res=>{console.log(res); this.listU=res});
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }
  addAbsence(){
    console.log(this.Absence);
    this.absenceService.createAbsence(this.Absence).subscribe(res=>{
      console.log(this.Absence);
      console.log(res);
      this.isSuccessful = true;

        this.isSignUpFailed = false;
        window.location.reload();

    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
 }











}
