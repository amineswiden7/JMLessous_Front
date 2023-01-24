import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-utilisateur-profile',
  templateUrl: './utilisateur-profile.component.html',
  styleUrls: ['./utilisateur-profile.component.css']
})
export class UtilisateurProfileComponent implements OnInit {

  constructor(private creditLibreS:CreditLibreService, private userConnecte: UserService) { }
  public chart: any;
  public chartI: any;
  creditLibre=new CreditLibre();
  listCredit:Amortissement[];
  listC:CreditLibre[];
  amort:number[]=[];
  inter:number[]=[];
  label:number[]=[];
  valeur:number;
  type:string;
  salaire:number;
  ngOnInit(): void {
   
    this.viewChart();
    this.creditLibreS.getAllCreditLUser(this.userConnecte.activeUser.idUser).subscribe(res=>{console.log(res);this.listC=res});
    //this.viewChart();
  }

  getCredit(id:number){
    for (var val of this.listC) {
       if(id==val.idCredit)
       {
        this.creditLibre=val;
       }
      
    }
    console.log(this.creditLibre)
  }
  createChart(id:number){
   
    this.getCredit(id);
    this.valeur=this.creditLibre.garantie.valeur;
    this.type=this.creditLibre.garantie.type;
    this.salaire=this.userConnecte.activeUser.salaire*12;
    this.creditLibreS.tab(this.creditLibre,this.valeur,this.type,this.salaire).subscribe(res=>{console.log(res);this.listCredit=res;this.listAmortissement(res);
      this.listInteret(res);
      });
      console.log (this.amort);
      console.log (this.label);
      console.log (this.inter);
    this.viewChart();
      
  }
  viewChart(){
   
    this.chartI= new Chart("ChartI", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.label
        , 
         datasets: [
         
          {
            label: "interet",
            data: this.inter,
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2
      }
      
    });
  this.chart = new Chart("ChartAmortissement", {
    type: 'bar', //this denotes tha type of chart

    data: {// values on X-Axis
      labels:this.label, 
       datasets: [
        {
          label: "amortissement",
          data: this.amort,
          backgroundColor: 'blue'
        } 
      ]
    },
    options: {
      aspectRatio:2
    }
    
  });
  }
  tabAmortissement(){
    //this.creditLibre.tauxInteret=this.counter;
    this.valeur=this.creditLibre.garantie.valeur;
    this.type=this.creditLibre.garantie.type;
    this.salaire=this.userConnecte.activeUser.salaire*12;
      this.creditLibreS.tab(this.creditLibre,this.valeur,this.type,this.salaire).subscribe(res=>{  console.log(this.creditLibre);
       this.listCredit=res;
        
           console.log(this.creditLibre);

      },
      err => {
       
      });
  }
     listAmortissement(list:Amortissement[]){
      let i=0;
      for (var val of list) {

        this.amort[i]=val.amortissement;
        this.label[i]=i;
        i++;
      }
      
     }
     listInteret(list:Amortissement[]){
      let i=0;
      for (var val of list) {
       this.inter[i]=val.interest;
       i++;
      }
     
    }
}
