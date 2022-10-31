import { OffreAssuranceService } from './../../../../services/assurance/offre-assurance.service';
import { Component, Input, OnInit } from '@angular/core';
import blogbox from '../../../../data/blog.json';
import { Router, ActivatedRoute } from '@angular/router';
import { OffreAssurance } from 'src/app/components/models/offre-assurance';

@Component({
  selector: 'app-offreassurance',
  templateUrl: './offreassurance.component.html',
  styleUrls: ['./offreassurance.component.css']
})
export class OffreassuranceComponent implements OnInit {
  @Input() offre !: OffreAssurance ;
  
  constructor(private route: ActivatedRoute) { }
  public blogbox: { id: number }[] = blogbox;


  ngOnInit(): void {

   /* this.service.getOffresAssurance().subscribe(
      data => {
        console.log(data);
        this.listOffre=data;
       // this.base64Data = data.image;
        //this.Image = 'data:image/jpeg;base64,' + this.base64Data;
      }
    )*/
  }

}
