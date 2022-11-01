import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteCourantServiceService } from 'src/app/services/compte-courant-service.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
listCompteC:any;
CompteCourant: any;
iduser: any;
  constructor(private CompteCourantService: CompteCourantServiceService , private router: Router) { }

  ngOnInit(): void {
    this.CompteCourant ={
      numCompte: null,
      solde: null,
      rib: null,
      iban: null,
      dateOuverture: null,
      state: null,
      montantDecouvert : null
    }
  }

  getAllCompteC(){
    this.CompteCourantService.getAllCompteC().subscribe(res => this.listCompteC = res)
  }
  addCompteC(iduser : any){
    this.CompteCourantService.addCompteC(this.CompteCourant,this.iduser).subscribe( () => this.getAllCompteC());
  }

}
