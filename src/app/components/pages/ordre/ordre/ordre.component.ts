import { UserService } from 'src/app/services/user.service';
import { Portfeuille } from './../../../models/portfeuille/portfeuille';
import { Ordre } from './../../../models/ordre/ordre';
import { PortfeuilleService } from 'src/app/services/portfeuille/portfeuille.service';
import { Router } from '@angular/router';
import { OrdreService } from './../../../../services/ordre/ordre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.component.html',
  styleUrls: ['./ordre.component.css']
})
export class OrdreComponent implements OnInit {

  public ordres : Ordre []
  public portfeuille = new Portfeuille()
  constructor(private service:OrdreService,private servicePortfeuille:PortfeuilleService, public router: Router,private userConnecte:UserService) { }

  ngOnInit(): void {
    this.loadPortfeuille()
    
  }

  loadPortfeuille():void {
    this.servicePortfeuille.getPortfeuilleByUser(this.userConnecte.activeUser.idUser).subscribe(
      data => {
       // console.log(data);
        this.portfeuille=data;
        this.loadOrdres(this.portfeuille.idPortfeuille);
        
      }
    )
  }

  loadOrdres(p:any):void {
    this.service.getOrdres(p).subscribe(
      data => {
       // console.log(data);
        this.ordres=data;
        console.log(data)
      }
    )
  }

}
