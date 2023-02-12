import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgWizardConfig, NgWizardService, STEP_STATE, THEME } from 'ng-wizard';
import { Credit } from 'src/app/models/credit';
import { CreditEtudiant } from 'src/app/models/creditEtudiant';
import { CreditEtudiantService } from 'src/app/services/CreditEtudiant/CreditEtudiant.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-etu',
  templateUrl: './credit-etu.component.html',
  styleUrls: ['./credit-etu.component.css']
})
export class CreditEtuComponent implements OnInit {
  creditImmob= new CreditEtudiant();
  creditImmobb= new CreditEtudiant();
  creditImmobbb= new CreditEtudiant();
  numCompte:any;

  credit=new Credit();
  idUser:any;
  id:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };

  constructor(private ngWizardService: NgWizardService, private userS:UserService,private creditImmobS:CreditEtudiantService,private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.numCompte = this.route.snapshot.params['numCompte'];
  }
  addCredit(){
    this.creditImmobS.createCredit(this.creditImmob,this.userS.activeUser.idUser,this.numCompte).subscribe({
      
      next:res=>{
      console.log("mehdi hantous")
      console.log(res);
      console.log(this.creditImmob);
      console.log(this.creditImmob.Score);
      console.log(this.idUser);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.creditImmobb=res;
      console.log(this.creditImmobb)
    },
    error:err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    },
    complete: () => {
     
      //this.goToEmployeeList()
      this.id=this.creditImmob.idCredit;
     
      //console.log(this.creditImmob.montantmensuelpretpayer)
      //this.router.navigate(['/credit-detail/{{creditImmob.idCredit}}']);
    }

    
    
    
    
    
    
    
  });
 }



 confirmer(){
  //    this.creditLibre.tauxInteret=this.counter;
        this.creditImmobS.createCreditconfirmer(this.creditImmobb).subscribe(res=>{ 
          console.log(this.creditImmobb)
           //console.log(this.creditLibre);
         this.creditImmobbb=res;
         console.log(this.creditImmobbb);
         Swal.fire('Merci pour votre confiance ', 'Votre crédit a éte ajouté avec succès!', 'success')  
         this.router.navigate(['/ListeCreditEtu']);


})




};

}
