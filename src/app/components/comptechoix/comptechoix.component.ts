import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteCourant } from 'src/app/models/compte-courant';
import { CompteEpargne } from 'src/app/models/compte-epargne';
import { ComptecourantService } from 'src/app/services/compte/comptecourant.service';
import { CompteepargneService } from 'src/app/services/compte/compteepargne.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comptechoix',
  templateUrl: './comptechoix.component.html',
  styleUrls: ['./comptechoix.component.css']
})
export class ComptechoixComponent implements OnInit {
  @Input() comptecourant !: CompteCourant ;
  @Input() compteepargne !: CompteEpargne ;
  idUser:any;
  acc: CompteCourant[];
  accE: CompteEpargne[];

  constructor(private comptecourantService:ComptecourantService
    ,private compteepargneService:CompteepargneService
    ,private router: Router,
    private route:ActivatedRoute,
    private usercon : UserService) { }
  
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
  }
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
  }
  testimonialmainConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    dots: false,
    vertical: true,
    asNavFor: '.testimonial-nav'
  }
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
  }
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
  }
  // features
  features = [
    {
        icon: "flaticon-live-show",
        title: "Live Advisor",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
        icon: "flaticon-website",
        title: "Get Registration",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
        icon: "flaticon-customer-service",
        title: "Instant Support",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
]

  ngOnInit(): void {
    this.idUser=1;
    this.getC();
    this.getCE();
    //this.getAll();
    //this.getAllE();
  }

  private getC(){
    this.comptecourantService.getC(this.idUser).subscribe(data => {
      this.acc = data;
    });
  }
  private getCE(){
    this.compteepargneService.getCE(this.idUser).subscribe(data => {
      this.accE = data;
    });
  }
  private getAll(){
    this.comptecourantService.getAllCompteC().subscribe(data => {
      this.acc = data;
    });
  }
  private getAllE(){
    this.compteepargneService.getAllCompteE().subscribe(data => {
      this.accE = data;
    });
  }

}
