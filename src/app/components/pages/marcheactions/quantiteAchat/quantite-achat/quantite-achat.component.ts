import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quantite-achat',
  templateUrl: './quantite-achat.component.html',
  styleUrls: ['./quantite-achat.component.css']
})
export class QuantiteAchatComponent implements OnInit {
  name : any;
  nombre : any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  acheter():void{

  }
}
