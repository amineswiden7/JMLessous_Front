import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-dialogue-s',
  templateUrl: './dialogue-s.component.html',
  styleUrls: ['./dialogue-s.component.css']
})
export class DialogueSComponent implements OnInit {
u=new Utilisateur();
salaire:number;
  constructor(@Inject(MAT_DIALOG_DATA)private data:any) {
    this.u=this.data.user;
    this.salaire=this.data.salaire;
   }

  ngOnInit(): void {
  }

}
