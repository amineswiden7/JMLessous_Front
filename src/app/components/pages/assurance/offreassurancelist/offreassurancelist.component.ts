import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OffreAssuranceService } from 'src/app/services/assurance/offre-assurance.service';
import blogbox from '../../../../data/blog.json';

@Component({
  selector: 'app-offreassurancelist',
  templateUrl: './offreassurancelist.component.html',
  styleUrls: ['./offreassurancelist.component.css']
})
export class OffreassurancelistComponent implements OnInit {

  offresAuto: any = [];
  offresHabit: any = [];
  offresResp: any = [];
  offresEmp: any = [];
  offresRente: any = [];
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
  public blogbox: { id: number }[] = blogbox;

  constructor(private service: OffreAssuranceService, public router: Router) { }

  ngOnInit(): void {
    this.service.getAvOffresByCateg('AUTOMOBILE').subscribe(
      data => {
        console.log(data);
        this.offresAuto = data;
      }
    );
    this.service.getAvOffresByCateg('HABITATION').subscribe(
      data => {
        console.log(data);
        this.offresHabit = data;
      }
    );
    this.service.getAvOffresByCateg('RESPONSABILITE_CIVILE').subscribe(
      data => {
        console.log(data);
        this.offresResp = data;
      }
    );
    this.service.getAvOffresByCateg('EMPRUNTEUR').subscribe(
      data => {
        console.log(data);
        this.offresEmp = data;
      }
    );
    this.service.getAvOffresByCateg('RENTE_VIAGERE').subscribe(
      data => {
        console.log(data);
        this.offresRente = data;
      }
    );
  }
}
