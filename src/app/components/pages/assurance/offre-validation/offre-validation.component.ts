import { Component, OnInit } from '@angular/core';
import {OffreAssuranceService} from '../../../../services/assurance/offre-assurance.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreAssurance} from '../../../models/offre-assurance';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-offre-validation',
  templateUrl: './offre-validation.component.html',
  styleUrls: ['./offre-validation.component.css']
})
export class OffreValidationComponent implements OnInit {
  idOffre !: any;
  offre: OffreAssurance;
  urlSafe: SafeResourceUrl;
  constructor(private service: OffreAssuranceService, private route: ActivatedRoute, public router: Router,
              public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.idOffre = this.route.snapshot.params.id;
    this.loadOffre(this.idOffre);
  }

  loadOffre(id: any): void {
    this.service.getOffreById(id).subscribe(
      data => {console.log(data);
               this.offre = data;
               this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.offre.lienLogo); }
    );
  }

  reject(): void{
    this.offre.statut = 'REJECTED';
    this.service.updateOffreAssurance(this.offre).subscribe(data => {
      this.router.navigate(['/offres-list-bank']);
    });
  }

  validate(): void{
    this.offre.statut = 'PUBLISHED';
    this.service.updateOffreAssurance(this.offre).subscribe(data => {
      this.router.navigate(['/offres-list-bank']);
    });
  }

}
