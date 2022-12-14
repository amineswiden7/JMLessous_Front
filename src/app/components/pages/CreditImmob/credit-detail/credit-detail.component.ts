import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/models/credit';
import { CreditImmobilier } from 'src/app/models/creditImmobilier';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  idcredit :number;
  credit : CreditImmobilier;

  constructor(private service:CreditImmobilierService,private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit(): void {
    this.idcredit = this.route.snapshot.params['idCredit'];
    this.loadCredit(this.idcredit);
    console.log(this.idcredit);
  }
  loadCredit(idcredit:any) {
    return this.service.getCredit(idcredit).subscribe(
      data => {console.log(data);
      this.credit=data;
    }
    )
  }

}
