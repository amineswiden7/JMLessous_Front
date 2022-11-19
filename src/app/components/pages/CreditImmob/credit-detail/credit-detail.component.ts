import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  idcredit !:any;
  credit !: any;

  constructor(private service:CreditImmobilierService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idcredit = this.route.snapshot.params['idCredit'];
    this.loadCredit(this.idcredit);
  }
  loadCredit(idcredit:any) {
    return this.service.getCredit(idcredit).subscribe(
      data => {console.log(data);
      this.credit=data;}
    )
  }

}
