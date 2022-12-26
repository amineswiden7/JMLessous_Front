import { Component, Inject, OnInit } from '@angular/core';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
 credit:CreditLibre;
  constructor( private creditS:CreditLibreService,@Inject(MAT_DIALOG_DATA)private cr:CreditLibre) { 
    this.credit=this.cr
    console.log("je suis le constructeur du dialogue whedha din omi lcridi ", this.credit)
  }

  ngOnInit(): void {
  }

}
