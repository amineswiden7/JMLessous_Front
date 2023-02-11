import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompteCourant } from 'src/app/models/compte-courant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ComptecourantService } from 'src/app/services/compte/comptecourant.service';
import { UserService } from 'src/app/services/user.service';
import { DialogueSComponent } from './dialogue-s/dialogue-s.component';
@Component({
  selector: 'app-affecter-salaire',
  templateUrl: './affecter-salaire.component.html',
  styleUrls: ['./affecter-salaire.component.css']
})
export class AffecterSalaireComponent implements OnInit {
  id:number;
  list:Utilisateur[];
  listC:CompteCourant[];
  idCpt:number;
  constructor(private userService:UserService,private comptecourantService:ComptecourantService,private dialog: MatDialog) { 
    this.list=[];
  }

  ngOnInit(): void {
    this.id= this.userService.activeUser.idUser;
    this.userService.getAllUser().subscribe(res=>{
      this.list=res;
    });
    this.comptecourantService.getC(this.id).subscribe(res=>{
        this.listC=res;
        console.log(this.listC);
    })
    
  }

  affecter(id,idCpt){
    this.userService.affecterSalaire(id,idCpt).subscribe(res=>{
      console.log(res);
      this.userService.getUser(id).subscribe(result=>{
        let dialogRef=this.dialog.open(DialogueSComponent,{
          data:{user:result,salaire:res},
          autoFocus : true,
          width:"500px",
          height:"500px"
    
        });
        dialogRef.afterClosed().subscribe(results=>{
          console.log("dialog fermé")
        })
      })
    })
  }

}
