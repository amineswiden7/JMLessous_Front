import { Component, OnInit } from '@angular/core';
import blogbox from '../../../../data/blog.json';
import {OffreAssuranceService} from '../../../../services/assurance/offre-assurance.service';

@Component({
  selector: 'app-offres-assureurs',
  templateUrl: './offres-assureurs.component.html',
  styleUrls: ['./offres-assureurs.component.css']
})
export class OffresAssureursComponent implements OnInit {

  constructor(private service: OffreAssuranceService) { }

  allOffers: any;
  validationOffrees: any;
  publishedOffers: any;
  rejectedOffers: any;
  suspendedOffers: any;
  notPublishedOffers: any;
  diffused: any;
  // pagination
  page = 1;
  public blogbox: { id: number }[] = blogbox;
  ngOnInit(): void {
    this.getAllOffers();
    this.getPublishedOffers();
    this.getValidationOffers();
    this.getNotPublishedOffers();
    this.getRejectedOffers();
    this.getSuspendedOffers();
  }

  getAllOffers(): void{
    this.service.getOffresAssurance().subscribe(
      data => {
        this.allOffers = data;
        this.diffused = data;
      }
    );
  }

  getValidationOffers(): void{
    this.service.getOffreByStatut('VALIDATION').subscribe(
      data => {
        this.validationOffrees = data;
      }
    );
  }

  getPublishedOffers(): void{
    this.service.getOffreByStatut('PUBLISHED').subscribe(
      data => {
        this.publishedOffers = data;
      }
    );
  }

  getRejectedOffers(): void{
    this.service.getOffreByStatut('REJECTED').subscribe(
      data => {
        this.rejectedOffers = data;
      }
    );
  }

  getSuspendedOffers(): void{
    this.service.getOffreByStatut('SUSPENDED').subscribe(
      data => {
        this.suspendedOffers = data;
      }
    );
  }

  getNotPublishedOffers(): void{
    this.service.getOffreByStatut('NOTPUBLISHED').subscribe(
      data => {
        this.notPublishedOffers = data;
      }
    );
  }

}
