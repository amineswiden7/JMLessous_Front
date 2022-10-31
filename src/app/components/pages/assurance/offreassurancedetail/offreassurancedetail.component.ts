import { ActivatedRoute } from '@angular/router';
import { OffreAssuranceService } from './../../../../services/assurance/offre-assurance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offreassurancedetail',
  templateUrl: './offreassurancedetail.component.html',
  styleUrls: ['./offreassurancedetail.component.css']
})
export class OffreassurancedetailComponent implements OnInit {
  idOffre !:any;
  offre !: any;
  constructor(private service:OffreAssuranceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idOffre = this.route.snapshot.params['id'];
    this.loadOffre(this.idOffre);
    //this.simulation(this.credit.amountCredit,this.credit.period,this.credit.typePeriod);
  }

  loadOffre(id:any) {
    return this.service.getOffreById(id).subscribe(
      data => {console.log(data);
      this.offre=data;}
    )
  }

  show(){
    console.log("clicked");
  }
}
