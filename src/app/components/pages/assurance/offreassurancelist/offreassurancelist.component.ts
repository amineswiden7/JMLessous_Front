import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OffreAssuranceService } from 'src/app/services/assurance/offre-assurance.service';

@Component({
  selector: 'app-offreassurancelist',
  templateUrl: './offreassurancelist.component.html',
  styleUrls: ['./offreassurancelist.component.css']
})
export class OffreassurancelistComponent implements OnInit {

  listOffres : any = [];
  constructor(private service:OffreAssuranceService,public router: Router) { }

  ngOnInit(): void {
    
    this.service.getOffresAssurance().subscribe(
      data => {
        console.log(data);
        this.listOffres=data;
      }
    )
  }
}
