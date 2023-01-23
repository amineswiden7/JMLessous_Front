import { Component, OnInit } from '@angular/core';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { Amortissement } from 'src/app/models/amortissement';

@Component({
  selector: 'app-tab-amortissement-libre',
  templateUrl: './tab-amortissement-libre.component.html',
  styleUrls: ['./tab-amortissement-libre.component.css']
})
export class TabAmortissementLibreComponent implements OnInit {
  creditLibre=new CreditLibre();
  listCredit:Amortissement[];
  valeur:number;
  type:string;
  salaire:number;
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
  constructor(private creditLibreS:CreditLibreService,private ngWizardService: NgWizardService) { }

  ngOnInit(): void {
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }
  
  tabAmortissement(){
    //this.creditLibre.tauxInteret=this.counter;
      this.creditLibreS.tab(this.creditLibre,this.valeur,this.type,this.salaire).subscribe(res=>{  console.log(this.creditLibre);
       this.listCredit=res;
        this.isSuccessful = true;
          this.isSignUpFailed = false;
           console.log(this.creditLibre);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      });
  }
}
