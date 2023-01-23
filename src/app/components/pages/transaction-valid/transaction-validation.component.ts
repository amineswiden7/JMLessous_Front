import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-valid',
  templateUrl: './transaction-valid.component.html',
  styleUrls: ['./transaction-valid.component.css']
})
export class TransactionValidComponent implements OnInit {
  @ViewChild('myModalClose') modalClose;
  rib : string ='' ;
  code:number=0;
  transaction = new Transaction();
  currency=0;
  montantAmount;
  currencyTo=0;
  coco=0;
  constructor(private transactionsService: TransactionService, private router: Router,private modalService: NgbModal ) {
 // this.transaction={};
   }
  ngOnInit(): void {
   
  }
  conversion(){
  
   
    //const base = document.querySelector('#currency-from').value;
   
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${this.currency}`)
        .then((response) => response.json())
        .then((data) => {
         //   const amount = document.querySelector("#amount").value;
           
          //  const currencyTo = document.querySelector("#currency-to").value;
          console.log(data);
          console.log(this.currency);
          console.log(this.currencyTo);
          console.log(this.montantAmount);
            const rate = data.rates[this.currencyTo];
            console.log(rate);
                this.coco= this.montantAmount * rate;
                console.log("valid: ", this.montantAmount * rate);
            
           // document.querySelector(".display-result").innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(2)}`;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
        return false;
}

  addtransactions(content){
    this.transactionsService.addtransactionInter(this.transaction).subscribe( data => {
      console.log(data);
    }) ;
    this.openVerticallyCentered(content)
    console.log(this.transaction);
  }
  apptransactionsINTER(){
    console.log(this.transaction);
    this.transactionsService.apptransactionInter(this.code,this.transaction).subscribe( data => {
      console.log(data);
      window.location.reload();
      //this.trs={};
     // this.goTotransactionsList();
    }) ;
    console.log(this.transaction);
   // this.modalClose.nativeElement.click();
  }
  
  goTotransactionsList(){
    this.router.navigate(['transactionss']);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
  }

  verify(i:number)
  {

    this.router.navigate(['transactionsbyrib',i]);
  }

  search(id:string)
  {

    this.router.navigate(['transactionsbyrib',id]);
  }
  
  openVerticallyCentered(content: any) {
    this.modalService.open(content,{ centered: true });
  }
 
  
}
