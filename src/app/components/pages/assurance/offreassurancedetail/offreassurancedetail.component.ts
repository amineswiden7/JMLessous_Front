import { ActivatedRoute } from '@angular/router';
import { OffreAssuranceService } from './../../../../services/assurance/offre-assurance.service';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-offreassurancedetail',
  templateUrl: './offreassurancedetail.component.html',
  styleUrls: ['./offreassurancedetail.component.css']
})
export class OffreassurancedetailComponent implements OnInit {
  idOffre !: any;
  offre !: any;
  urlSafe: SafeResourceUrl;
  constructor(private service: OffreAssuranceService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.idOffre = this.route.snapshot.params.id;
    this.loadOffre(this.idOffre);
    // this.simulation(this.credit.amountCredit,this.credit.period,this.credit.typePeriod);
  }

  loadOffre(id: any): void {
    this.service.getOffreById(id).subscribe(
      data => {console.log(data);
               this.offre = data;
               this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.offre.lienLogo);
      }
    );
  }

  show(): void{
    console.log('clicked');
  }
}
