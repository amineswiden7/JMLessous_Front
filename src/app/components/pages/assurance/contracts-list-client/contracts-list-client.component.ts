import { Component, OnInit } from '@angular/core';
import {NgWizardService} from 'ng-wizard';
import {ActivatedRoute} from '@angular/router';
import {OffreAssuranceService} from '../../../../services/assurance/offre-assurance.service';
import {ContratAssurance} from '../../../models/contrat-assurance';

@Component({
  selector: 'app-contracts-list-client',
  templateUrl: './contracts-list-client.component.html',
  styleUrls: ['./contracts-list-client.component.css']
})
export class ContractsListClientComponent implements OnInit {

  constructor(private ngWizardService: NgWizardService, private route: ActivatedRoute, private service: OffreAssuranceService) { }

  idOffre: any;
  listeContrats: ContratAssurance[];
  blogConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 400,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        }
      }
    ]
  };
  ngOnInit(): void {
    this.idOffre = this.route.snapshot.params['id'];
    this.loadContrats(this.idOffre);
  }

  loadContrats(id: any): void {
    this.service.getContratsByUser(id).subscribe(
      data => {
        this.listeContrats = data;
      }
    );
  }

}
