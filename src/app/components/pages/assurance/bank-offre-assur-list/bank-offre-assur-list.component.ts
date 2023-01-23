import { Component, OnInit } from '@angular/core';
import {OffreAssuranceService} from '../../../../services/assurance/offre-assurance.service';
import {OffreAssurance} from '../../../models/offre-assurance';

@Component({
  selector: 'app-bank-offre-assur-list',
  templateUrl: './bank-offre-assur-list.component.html',
  styleUrls: ['./bank-offre-assur-list.component.css']
})
export class BankOffreAssurListComponent implements OnInit {

  constructor(private service: OffreAssuranceService) { }

  autoOffrees: OffreAssurance[];
  habitOffers: OffreAssurance[];
  respCivOffers: OffreAssurance[];
  renteOffers: OffreAssurance[];
  empOffers: OffreAssurance[];

  ngOnInit(): void {
    this.getAutoOffers();
    this.getHabitOffers();
    this.getEmpOffers();
    this.getRespCivOffers();
    this.getRenteOffers();
  }

  getAutoOffers(): void{
    this.service.getPubOffresByCateg('AUTOMOBILE').subscribe(
      data => {
        this.autoOffrees = data;
      }
    );
  }

  getHabitOffers(): void{
    this.service.getPubOffresByCateg('HABITATION').subscribe(
      data => {
        this.habitOffers = data;
      }
    );
  }

  getRespCivOffers(): void{
    this.service.getPubOffresByCateg('RESPONSABILITE_CIVILE').subscribe(
      data => {
        this.respCivOffers = data;
      }
    );
  }

  getRenteOffers(): void{
    this.service.getPubOffresByCateg('RENTE_VIAGERE').subscribe(
      data => {
        this.renteOffers = data;
      }
    );
  }

  getEmpOffers(): void{
    this.service.getPubOffresByCateg('EMPRUNTEUR').subscribe(
      data => {
        this.empOffers = data;
      }
    );
  }

}
