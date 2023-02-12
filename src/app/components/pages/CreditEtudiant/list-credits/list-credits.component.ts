import { Component, OnInit } from '@angular/core';
import { CreditEtudiant } from 'src/app/models/creditEtudiant';
import { CreditEtudiantService } from 'src/app/services/CreditEtudiant/CreditEtudiant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-credits',
  templateUrl: './list-credits.component.html',
  styleUrls: ['./list-credits.component.css']
})
export class ListCreditsComponent implements OnInit {
  listC:CreditEtudiant[];

  constructor(private credit:CreditEtudiantService, private users:UserService) {
    this.listC=[]
   }

  ngOnInit(): void {
    this.credit.getCreditByUser(this.users.activeUser.idUser).subscribe(res=>{console.log(res);this.listC=res});
  }

}
