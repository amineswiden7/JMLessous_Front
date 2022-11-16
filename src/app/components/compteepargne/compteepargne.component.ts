import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { CompteEpargne } from 'src/app/models/compte-epargne';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CompteepargneService } from 'src/app/services/compte/compteepargne.service';
import { UserService } from 'src/app/services/user.service';
import { CompteComponent } from '../pages/compte/compte.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-compteepargne',
  templateUrl: './compteepargne.component.html',
  styleUrls: ['./compteepargne.component.css']
})
export class CompteepargneComponent implements OnInit {
  closeResult = '';
  compteepargne=new CompteEpargne();
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

  constructor(private ngWizardService: NgWizardService,
    private compteapragneService:CompteepargneService
    ,private UserService:UserService
    ,private modalService: NgbModal
    ,public dialog : MatDialog
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


  addCompteE(){
    console.log(this.compteepargne);
    this.compteapragneService.addCompteE(this.compteepargne,this.idUser).subscribe(data=> {
      console.log(data);
    },
    error => console.log(error));
 }
 goToSim(){
  this.router.navigate(['compte']);
 }
 openDialog(){
  this.dialog.open(CompteComponent);
  }
 
  async open(): Promise<void> {
      this.modalService.open(CompteComponent, {centered: true, animation: true, scrollable: false, size: 'lg'});
  }
}
