import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Amortissement } from 'src/app/models/amortissement';
import { Credit } from 'src/app/models/credit';
import { CreditImmobilier } from 'src/app/models/creditImmobilier';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';

@Component({
  selector: 'app-simulateur-credit-immob',
  templateUrl: './simulateur-credit-immob.component.html',
  styleUrls: ['./simulateur-credit-immob.component.css']
})
export class SimulateurCreditImmobComponent implements OnInit {
  fileControl: FormControl;

  isLinear = false;
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);

	isLinearvarient = false;
  	varientfirstFormGroup: FormGroup=Object.create(null);
 	varientsecondFormGroup: FormGroup=Object.create(null);
  creditImmob= new CreditImmobilier();
  listCredit=new Amortissement();
  listCreditt:Amortissement[];

  constructor(private CreditImm:CreditImmobilierService) { }

  ngOnInit(): void {
  }

  simulater(){
    //    this.creditLibre.tauxInteret=this.counter;
          this.CreditImm.Simulate(this.creditImmob).subscribe(res=>{ 
             //console.log(this.creditLibre);
           this.listCredit=res;


})};


tabAmortissement(){
  //this.creditLibre.tauxInteret=this.counter;
    this.CreditImm.tabAmortissement(this.creditImmob).subscribe(res=>{  console.log(this.creditImmob);
     this.listCreditt=res;
     console.log(this.listCreditt);
      

    },
    err => {
      
    });
}

}
