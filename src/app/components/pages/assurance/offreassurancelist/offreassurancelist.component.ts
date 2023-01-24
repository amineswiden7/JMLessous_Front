import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OffreAssuranceService } from 'src/app/services/assurance/offre-assurance.service';
import blogbox from '../../../../data/blog.json';
import intropost from '../../../../data/intro.json';
import processbox from '../../../../data/process.json';
import serviceblock from '../../../../data/services.json';
import teamblock from '../../../../data/team.json';
import testimonials from '../../../../data/testimonial.json';

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
  bannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    focusOnSelect: true,
    cssEase: 'linear'
  };
  teamConfig = {
    slidesToShow: 4,
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
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  };
  testimonialmainConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    dots: false,
    vertical: true,
    asNavFor: '.testimonial-nav'
  };
  testimonialnavConfig = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    asNavFor: '.testimonial-for',
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    }]
  };
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
