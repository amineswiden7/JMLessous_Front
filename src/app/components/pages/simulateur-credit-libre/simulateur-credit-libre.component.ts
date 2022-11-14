import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
@Component({
  selector: 'app-simulateur-credit-libre',
  templateUrl: './simulateur-credit-libre.component.html',
  styleUrls: ['./simulateur-credit-libre.component.css']
})
export class SimulateurCreditLibreComponent implements OnInit {

  //creditLibre=new CreditLibre();
  montant:any;
  taux:any;
  duree:any;
  listCredit=new Amortissement();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  public counter: number = 7
  increment() {
    this.counter += 0.1;
  }
  decrement() {
    this.counter -= 0.1;
  }
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
  constructor(private creditLibreS:CreditLibreService,private ngWizardService: NgWizardService) 
  {
   
   }

  ngOnInit(): void {

   
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }
  
  simulater(){
//    this.creditLibre.tauxInteret=this.counter;
      this.creditLibreS.Simulate(this.montant,this.duree,this.taux).subscribe(res=>{  //console.log(this.creditLibre);
       this.listCredit=res;
       
          console.log(this.listCredit);

      },
      err => {
        this.errorMessage = err.error.message;
     
      });
  }

}
