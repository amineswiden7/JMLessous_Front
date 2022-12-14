import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreditEtudiant } from 'src/app/models/creditEtudiant';
import { CreditEtudiantService } from 'src/app/services/CreditEtudiant/CreditEtudiant.service';

@Component({
  selector: 'app-list-credits-back',
  templateUrl: './list-credits-back.component.html',
  styleUrls: ['./list-credits-back.component.css']
})
export class ListCreditsBackComponent implements OnInit {
  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  filterTerm!: string;
  listCredit: any;
  listcredits: any;
  listC:CreditEtudiant[];

  constructor(private credit:CreditEtudiantService,private modalService: NgbModal,private router: Router) { 
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

onTableDataChange(event: any) {
  this.page = event;
  this.getallCredit();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getallCredit();
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

