import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import $ from 'jquery'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
connecte:Boolean;
  constructor(@Inject(DOCUMENT) private document: Document, private userConnecte: UserService ) { 
    this.connecte=false;
    if(this.userConnecte.activeUser.idUser!=null)
    { console.log(this.connecte)
     console.log(this.userConnecte.activeUser)
     this.connecte=true 
     this.role=this.userConnecte.activeUser.role;
     if(this.role=="ADMIN")
     {
       this.permission=true;
     }
    console.log(this.permission)
    }
  }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    //set up the div "id=nav"
    if (document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150) {
      document.getElementById('can-sticky').classList.add('sticky');
    }
    else {
      document.getElementById('can-sticky').classList.remove('sticky');
    }
  }
  // navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Search
  searchmethod: boolean = true;
  searchToggle() {
    this.searchmethod = !this.searchmethod;
  }
  role:any;
  permission:Boolean;
  ngOnInit(): void {
 
    function mobilemenu() {
      ($(".menu-item-has-children > a") as any).on('click', function (e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();

        submenu.slideToggle(200);
      });
    }
    mobilemenu()
  }

  logout() {
    //this.authS.logOut().subscribe(resp => { });
    sessionStorage.clear();
    console.log(sessionStorage)
    //this.router.navigateByUrl('/ClientPage');
    //this.router.navigateByUrl("/ClientPage")
    window.location.reload();
  }
}
