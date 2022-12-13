import { Component, OnInit } from '@angular/core';
import { CreditLibre } from 'src/app/models/credit-libre';
import { CreditLibreService } from 'src/app/services/creditLibre/credit-libre.service';
import { UserService } from 'src/app/services/user.service';
import blogbox from '../../../../data/blog.json';
import blogcategory from '../../../../data/blogcategory.json';
@Component({
  selector: 'app-bar-side-profile',
  templateUrl: './bar-side-profile.component.html',
  styleUrls: ['./bar-side-profile.component.css']
})
export class BarSideProfileComponent implements OnInit {
  listC:CreditLibre[];
  constructor(private credit:CreditLibreService,private userConnecte: UserService) { }
  public blogbox: { id: number }[] = blogbox;
  public blogcategory: { id: number }[] = blogcategory;
  ngOnInit(): void {
    this.credit.getAllCreditLUser(this.userConnecte.activeUser.idUser).subscribe(res=>{console.log(res);this.listC=res});
  }

}
