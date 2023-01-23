import { OrdreComponent } from './components/pages/ordre/ordre/ordre.component';
import { PortfeuilleComponent } from './components/pages/portfeuille/portfeuille/portfeuille.component';
import { AddOffreAssuranceComponent } from './components/pages/assurance/add-offre-assurance/add-offre-assurance.component';
import { OffreassuranceComponent } from './components/pages/assurance/offreassurance/offreassurance.component';
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';

import { OffreassurancedetailComponent } from './components/pages/assurance/offreassurancedetail/offreassurancedetail.component';
import { OffreassurancelistComponent } from './components/pages/assurance/offreassurancelist/offreassurancelist.component';
import { SimulateurCreditLibreComponent } from './components/pages/simulateur-credit-libre/simulateur-credit-libre.component';
import {MarcheactionsComponent} from './components/pages/marcheactions/marcheactions.component';
import { ComptecourantComponent } from './components/pages/comptecourant/comptecourant.component';
import { CreditLibreComponent } from './components/pages/credit-libre/credit-libre.component';
import { CompteComponent } from './components/pages/compte/compte.component';
import { CompteepargneComponent } from './components/compteepargne/compteepargne.component';
import { UsercompteComponent } from './components/pages/usercompte/usercompte.component';
import { TransactionValidComponent } from './components/pages/transaction-valid/transaction-validation.component';
import { CurrencyconvComponent } from './components/pages/currencyconv/currencyconv.component';
import { CreateCreditComponent } from './components/pages/CreditImmob/create-credit/create-credit.component'; 
import { AjoutCreditLibreComponent } from './components/pages/credit-libre/ajout-credit-libre/ajout-credit-libre.component';
import { ListesCreditsComponent } from './components/pages/CreditImmob/listes-credits/listes-credits.component';
import { ComptechoixComponent } from './components/comptechoix/comptechoix.component';
import { UsercompteEpComponent } from './components/pages/usercompte-ep/usercompte-ep.component';
import { AjouterFormationComponent } from './components/pages/formation/ajouter-formation/ajouter-formation.component';
import { FormationsComponent } from './components/pages/formation/formations/formations.component';
import { OneFormationComponent } from './components/pages/formation/one-formation/one-formation.component';



const routes: Routes = [
  {path: 'choix',component :ComptechoixComponent},
  {path: 'compte',component :CompteComponent},
  {path: 'courant',component :ComptecourantComponent},
  {path: 'epargne',component :CompteepargneComponent},
  {path: 'usercompte/:numCompte',component :UsercompteComponent},
  {path: 'usercompteE/:numCompte',component :UsercompteEpComponent},
  {path: 'trans',component :TransactionValidComponent},
  {path: 'currency',component :CurrencyconvComponent},

  //{ path: 'courantt', loadChildren: () => import('./components/pages/courant/courant.module').then(m => m.CourantModule), data: { breadcrumb: 'Courant' }  },


  {path: 'addformation',component :AjouterFormationComponent},
  {path: 'formations',component :FormationsComponent},
  {path: 'formation/:idFormation',component :OneFormationComponent},

  
  { path: 'coursActions', component: MarcheactionsComponent},
  { path: 'LoginPage', component: LoginComponent},
  { path: 'RegisterPage', component: RegisterComponent},
  { path: 'CreditLibrePage', component: CreditLibreComponent},
  { path: 'SimulateurPage', component: SimulateurCreditLibreComponent},
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/hometwo/hometwo.module').then(m => m.HometwoModule), data: { breadcrumb: 'Homepage' } },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  // tslint:disable-next-line:max-line-length
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } },
  // tslint:disable-next-line:max-line-length
  { path: 'blog-sidebar', loadChildren: () => import('./components/pages/blogleft/blogleft.module').then(m => m.BlogleftModule), data: { breadcrumb: 'Blog Left' } },
  // tslint:disable-next-line:max-line-length
  { path: 'blog-single/:id', loadChildren: () => import('./components/pages/blogdetail/blogdetail.module').then(m => m.BlogdetailModule), data: { breadcrumb: 'Blog Details' } },
  // tslint:disable-next-line:max-line-length
  { path: 'coming-soon', loadChildren: () => import('./components/pages/comingsoon/comingsoon.module').then(m => m.ComingsoonModule), data: { breadcrumb: 'Coming Soon' } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  { path: 'error', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } },
  { path: 'finance', loadChildren: () => import('./components/pages/finance/finance.module').then(m => m.FinanceModule), data: { breadcrumb: 'Finance' }  },
  // tslint:disable-next-line:max-line-length
  { path: 'loan-calculator', loadChildren: () => import('./components/pages/loancalculator/loancalculator.module').then(m => m.LoancalculatorModule), data: { breadcrumb: 'Loan Calculator' } },
  // tslint:disable-next-line:max-line-length
  { path: 'loan-step', loadChildren: () => import('./components/pages/loanstep/loanstep.module').then(m => m.LoanstepModule), data: { breadcrumb: 'Loan Steps' } },
  { path: 'service', loadChildren: () => import('./components/pages/service/service.module').then(m => m.ServiceModule), data: { breadcrumb: 'Service' } },
  // tslint:disable-next-line:max-line-length
  { path: 'service-detail/:id', loadChildren: () => import('./components/pages/servicedetail/servicedetail.module').then(m => m.ServicedetailModule), data: { breadcrumb: 'Service Details' } },
  { path: 'team', loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule), data: { breadcrumb: 'Team' } },
  // tslint:disable-next-line:max-line-length

  { path: 'loan-dashboard', loadChildren: () => import('./components/pages/userdashboard/userdashboard.module').then(m => m.UserdashboardModule), data: { breadcrumb: 'User Dashboard' } },
  { path: 'offre-assurance', component : OffreassurancelistComponent},
  { path: 'createcredit', component : CreateCreditComponent},
  { path: 'listeCreditByClient', component : ListesCreditsComponent},
  { path: 'offre-assurance/:id', component : OffreassurancedetailComponent },
  { path: 'add-offre', component : AddOffreAssuranceComponent },
  { path: 'Mon-Portfeuille', component : PortfeuilleComponent },
  { path: 'Mes-Mouvement', component : OrdreComponent },
  { path: '**', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
