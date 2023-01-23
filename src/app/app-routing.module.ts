import { OrdreComponent } from './components/pages/ordre/ordre/ordre.component';
import { PortfeuilleComponent } from './components/pages/portfeuille/portfeuille/portfeuille.component';
import { AddOffreAssuranceComponent } from './components/pages/assurance/add-offre-assurance/add-offre-assurance.component';
import { OffreassuranceComponent } from './components/pages/assurance/offreassurance/offreassurance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CompteComponent } from './components/pages/compte/compte.component';

import { OffreassurancedetailComponent } from './components/pages/assurance/offreassurancedetail/offreassurancedetail.component';
import { OffreassurancelistComponent } from './components/pages/assurance/offreassurancelist/offreassurancelist.component';

import {MarcheactionsComponent} from './components/pages/marcheactions/marcheactions.component';


import { ComptecourantComponent } from './components/pages/comptecourant/comptecourant.component';

import { CreditLibreComponent } from './components/pages/credit-libre/credit-libre.component';
import { SimulateurCreditLibreComponent } from './components/pages/simulateur-credit-libre/simulateur-credit-libre.component';
import {ConfigOffreAssuranceComponent} from './components/pages/assurance/config-offre-assurance/config-offre-assurance.component';
import {OffresAssureursComponent} from './components/pages/assurance/offres-assureurs/offres-assureurs.component';
import {BankOffreAssurListComponent} from './components/pages/assurance/bank-offre-assur-list/bank-offre-assur-list.component';
import {OffreValidationComponent} from './components/pages/assurance/offre-validation/offre-validation.component';
import {ContractRegistrationComponent} from './components/pages/assurance/contract-registration/contract-registration.component';
import {ContractsListAgComponent} from './components/pages/assurance/contracts-list-ag/contracts-list-ag.component';
import {ContractsListClientComponent} from './components/pages/assurance/contracts-list-client/contracts-list-client.component';

import { AdminCreditLibreComponent } from './components/pages/admin-credit-libre/admin-credit-libre.component';
import { UtilisateurProfileComponent } from './components/pages/utilisateur-profile/utilisateur-profile.component';
// import { UserDashboardComponent } from './components/pages/user-dashboard/user-dashboard.component';
import { CompteepargneComponent } from './components/compteepargne/compteepargne.component';
import { UsercompteComponent } from './components/pages/usercompte/usercompte.component';
import { TransactionValidComponent } from './components/pages/transaction-valid/transaction-validation.component';
import { CurrencyconvComponent } from './components/pages/currencyconv/currencyconv.component';
import { CreateCreditComponent } from './components/pages/CreditImmob/create-credit/create-credit.component';
import { AjoutCreditLibreComponent } from './components/pages/credit-libre/ajout-credit-libre/ajout-credit-libre.component';
import { ListesCreditsComponent } from './components/pages/CreditImmob/listes-credits/listes-credits.component';
import { CreditDetailComponent } from './components/pages/CreditImmob/credit-detail/credit-detail.component';
import { SimulateurCreditImmobComponent } from './components/pages/simulateur-credit-immob/simulateur-credit-immob.component';
import { ListeCreditBackComponent } from './components/pages/CreditImmob/liste-credit-back/liste-credit-back.component';
import { CreditEtuComponent } from './components/pages/CreditEtudiant/credit-etu/credit-etu.component';
import { ListCreditsComponent } from './components/pages/CreditEtudiant/list-credits/list-credits.component';
import { ListCreditsBackComponent } from './components/pages/CreditEtudiant/list-credits-back/list-credits-back.component';
import { CreateAbsenceComponent } from './components/pages/Absence/create-absence/create-absence.component';
import { ListeAbsenceComponent } from './components/pages/Absence/liste-absence/liste-absence.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';

import { AffecterSalaireComponent } from './components/pages/affecter-salaire/affecter-salaire.component';


const routes: Routes = [
  {path: 'affecterSalaire',component :AffecterSalaireComponent},
  {path: 'compte',component :CompteComponent},
  {path: 'courant',component :ComptecourantComponent},
  {path: 'adminCreditLibre', component:AdminCreditLibreComponent},
  {path: 'utilisateurProfile', component:UtilisateurProfileComponent},
  {path: 'epargne',component :CompteepargneComponent},
  {path: 'usercompte',component :UsercompteComponent},
  {path: 'trans',component :TransactionValidComponent},
  {path: 'currency',component :CurrencyconvComponent},
  

  {path: 'compte', component: CompteComponent},
  {path: 'courant', component: ComptecourantComponent},
  {path: 'adminCreditLibre', component: AdminCreditLibreComponent},
  {path: 'utilisateurProfile', component: UtilisateurProfileComponent},
  {path: 'epargne', component: CompteepargneComponent},
  {path: 'usercompte', component: UsercompteComponent},
  {path: 'trans', component: TransactionValidComponent},
  {path: 'currency', component: CurrencyconvComponent},
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
  { path: 'credit-detail/:idCredit', component : CreditDetailComponent },
  { path: 'simulateurImm', component : SimulateurCreditImmobComponent},
  { path: 'creditBackImm', component : ListeCreditBackComponent},
  { path: 'AjoutCreditEtu', component : CreditEtuComponent},
  { path: 'CreditBackEtu', component : ListCreditsBackComponent},
  { path: 'ListeCreditEtu', component : ListCreditsComponent},
  { path: 'Mon-Portfeuille', component : PortfeuilleComponent },
  { path: 'Mes-Mouvement', component : OrdreComponent },
  { path: 'AjoutAbsence', component : CreateAbsenceComponent },
  { path: 'ListeAbsence', component : ListeAbsenceComponent },
  { path: 'config-offre/:id', component : ConfigOffreAssuranceComponent },
  { path: 'offres-assureurs', component : OffresAssureursComponent },
  { path: 'offres-list-bank', component : BankOffreAssurListComponent },
  { path: 'offre-validation/:id', component : OffreValidationComponent },
  { path: 'offre-contrats-ag/:id', component : ContractsListAgComponent },
  { path: 'mycontratslist/:id', component : ContractsListClientComponent },
  { path: 'contract-registration/:id', component : ContractRegistrationComponent },
  { path: 'view-dashboard', component : DashboardComponent },
  { path: '**', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
