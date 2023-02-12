import { Component, OnInit } from '@angular/core';
import { CreditImmobilier } from 'src/app/models/creditImmobilier';
import { CreditImmobilierService } from 'src/app/services/CreditImmobilier/creditImmob.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listes-credits',
  templateUrl: './listes-credits.component.html',
  styleUrls: ['./listes-credits.component.css']
})
export class ListesCreditsComponent implements OnInit {

  listC:CreditImmobilier[];
  constructor(private credit:CreditImmobilierService, private userService:UserService) 
  {
    this.listC=[]

  }

  ngOnInit(): void {
    this.credit.getAllCreditbyuser(this.userService.activeUser.idUser).subscribe(res=>{console.log(res);this.listC=res});
  }

}
