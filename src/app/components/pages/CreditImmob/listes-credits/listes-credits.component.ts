import { Component, OnInit } from '@angular/core';
import { CreditImmobilier } from 'src/app/models/creditImmobilier';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';

@Component({
  selector: 'app-listes-credits',
  templateUrl: './listes-credits.component.html',
  styleUrls: ['./listes-credits.component.css']
})
export class ListesCreditsComponent implements OnInit {

  listC:CreditImmobilier[];
  constructor(private credit:CreditImmobilierService) 
  {
    this.listC=[]

  }

  ngOnInit(): void {
    this.credit.getAllCreditbyuser(1).subscribe(res=>{console.log(res);this.listC=res});
  }

}
