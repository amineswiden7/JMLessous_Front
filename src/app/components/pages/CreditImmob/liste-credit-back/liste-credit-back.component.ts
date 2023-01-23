import { Component, OnInit } from '@angular/core';
import { CreditImmobilier } from 'src/app/models/creditImmobilier';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-credit-back',
  templateUrl: './liste-credit-back.component.html',
  styleUrls: ['./liste-credit-back.component.css']
})
export class ListeCreditBackComponent implements OnInit {
  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  filterTerm!: string;
  listCredit: any;
  listcredits: any;
  CreditImmobilier:CreditImmobilier=new CreditImmobilier();
  
  listC:CreditImmobilier[];
  constructor(private credit:CreditImmobilierService,private modalService: NgbModal,private router: Router) { 

    this.listC=[]
  }

  ngOnInit(): void {
    this.getallCredit()


  }
  getallCredit(){
    this.credit.getAllCreditL().subscribe(res=>{console.log(res);this.listcredits=res});
  }




  Accepter(id: number){
    this.credit.accepter(id).subscribe( data => {
      this.getallCredit();

    })

}


refuser(id: number){
  this.credit.refuser(id).subscribe( data => {
    this.getallCredit();

  })
}
getCredit(id:number): any{
  this.credit.getCredit(id).subscribe(data => {
    this.CreditImmobilier = data;
  });
}

onTableDataChange(event: any) {
  this.page = event;
  this.getallCredit();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getallCredit();
}
open(content1,id) {
  this.credit.getCredit(id).subscribe(data => {
    this.CreditImmobilier=data;
    console.log(data);
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
   
    //this.getCredit(id);
    console.log(this.CreditImmobilier);
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
});
}

openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}


}
