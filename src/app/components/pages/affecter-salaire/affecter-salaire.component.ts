import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Utilisateur } from 'src/app/models/utilisateur';
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
  constructor(private userService:UserService,private dialog: MatDialog) { 
    this.list=[];
  }

  ngOnInit(): void {
    this.id= this.userService.activeUser.idUser;
    this.userService.getAllUser().subscribe(res=>{
      this.list=res;
    });
  }

  affecter(id){
    this.userService.affecterSalaire(id).subscribe(res=>{
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
