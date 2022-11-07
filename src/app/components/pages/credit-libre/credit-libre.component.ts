import { Component, OnInit } from '@angular/core';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';

@Component({
  selector: 'app-credit-libre',
  templateUrl: './credit-libre.component.html',
  styleUrls: ['./credit-libre.component.css']
})
export class CreditLibreComponent implements OnInit {

  listC:CreditLibre[];
  constructor(private credit:CreditLibreService) 
  {
    this.listC=[]

  }

  ngOnInit(): void {
    this.credit.getAllCreditL().subscribe(res=>{console.log(res);this.listC=res});
  }

}
