import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user= new Utilisateur() ;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
prenom:string="";
  constructor(private authService: AuthService) { 
    this.user.role="CLIENT";
  }

  ngOnInit(): void {
   console.log(this.user)
  }

  onSubmit(): void {
    console.log(this.user)
    this.user.prénom=this.prenom;
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}