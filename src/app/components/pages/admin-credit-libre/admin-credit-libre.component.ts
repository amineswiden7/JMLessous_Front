import { Component, OnInit } from '@angular/core';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { DialogueComponent } from './dialogue/dialogue.component';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
@Component({
  selector: 'app-admin-credit-libre',
  templateUrl: './admin-credit-libre.component.html',
  styleUrls: ['./admin-credit-libre.component.css']
})
export class AdminCreditLibreComponent implements OnInit {
  listC:CreditLibre[];
  listCENCOURS:CreditLibre[];
  listCREFUS:CreditLibre[];
  listCACCEPTE:CreditLibre[];
  cred:CreditLibre;
  constructor(private credit:CreditLibreService,private dialog: MatDialog) { 
    this.listC=[]
  }

  ngOnInit(): void {
    this.credit.getAllCreditL().subscribe(res=>{console.log(res);this.listC=res});
    this.credit.getAllCreditLStatus("ENCOURSDETRAITEMENT").subscribe(res=>{console.log(res);this.listCENCOURS=res});
    console.log(this.listCENCOURS)
    this.credit.getAllCreditLStatus("REFUS").subscribe(res=>{console.log(res);this.listCREFUS=res});
    console.log(this.listCREFUS)
    this.credit.getAllCreditLStatus("ACCEPTE").subscribe(res=>{console.log(res);this.listCACCEPTE=res});
    console.log(this.listCACCEPTE)
  }

  accepter(idUser:any){

    this.credit.acceptCredit(idUser,"ACCEPTE",this.cred).subscribe(res=>{console.log(res);});
  }
  openDialog(idCredit:number) {
   
    this.credit.getCredit(idCredit).subscribe((res:any)=>{
      
      let dialogRef=this.dialog.open(DialogueComponent,{
        data:res,
        autoFocus : true,
        
         width:"500px",
        height:"500px"
  
      });
      dialogRef.afterClosed().subscribe(results=>{
        console.log("dialog fermé")
      })
      
    })
  }

}
