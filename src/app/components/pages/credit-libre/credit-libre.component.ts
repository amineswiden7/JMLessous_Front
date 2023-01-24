import { Component, OnInit } from '@angular/core';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-credit-libre',
  templateUrl: './credit-libre.component.html',
  styleUrls: ['./credit-libre.component.css']
})
export class CreditLibreComponent implements OnInit {
  role:any;
  permission:Boolean=true;
  listC:CreditLibre[];
  constructor(private credit:CreditLibreService, private userConnecte: UserService ) 
  {
    this.listC=[]

  }

  ngOnInit(): void {
    this.credit.getAllCreditLUser(this.userConnecte.activeUser.idUser).subscribe(res=>{console.log(res);this.listC=res});

    this.role=this.userConnecte.activeUser.role;
    if(this.role=="ADMIN")
    {
      this.permission=true;
    }
   console.log(this.permission) 
  }

}
