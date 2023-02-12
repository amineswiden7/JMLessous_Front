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
  C=new CompteCourant();
  idCpt:number;
  acc :CompteCourant[];
  rib:string;
  constructor(private userService:UserService,private comptecourantService:ComptecourantService,private dialog: MatDialog) { 
    this.list=[];
  }

  ngOnInit(): void {
    this.id= this.userService.activeUser.idUser;
    this.userService.getAllUser().subscribe(res=>{
      this.list=res;
    });

    
  }

    getC(id){
    this.comptecourantService.getC(id).subscribe(data => {
      this.acc = data;
      console.log(data)
  
    });
  }
  affecter(id){
    //idCpt=this.C.numCompte;
    console.log(this.C)
    this.userService.affecterSalaire(id,this.rib).subscribe(res=>{
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
