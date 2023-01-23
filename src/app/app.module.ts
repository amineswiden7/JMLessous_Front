import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';

import { CompteComponent } from './components/pages/compte/compte.component';


import { OffreassuranceComponent } from './components/pages/assurance/offreassurance/offreassurance.component';
import { OffreassurancedetailComponent } from './components/pages/assurance/offreassurancedetail/offreassurancedetail.component';
import { OffreassurancelistComponent } from './components/pages/assurance/offreassurancelist/offreassurancelist.component';

import { MarcheactionsComponent } from './components/pages/marcheactions/marcheactions.component';
import {SharedModule} from './components/shared/shared.module';
import { DetailsActionComponent } from './components/pages/marcheactions/details-action/details-action.component';
import {MatTableModule, MatTabsModule} from '@angular/material';

import { AddOffreAssuranceComponent } from './components/pages/assurance/add-offre-assurance/add-offre-assurance.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { CreditLibreComponent } from './components/pages/credit-libre/credit-libre.component';
import { ComptecourantComponent } from './components/pages/comptecourant/comptecourant.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


import { GarantieComponent } from './components/pages/garantie/garantie.component';
import { AjoutCreditLibreComponent } from './components/pages/credit-libre/ajout-credit-libre/ajout-credit-libre.component';
import { SimulateurCreditLibreComponent } from './components/pages/simulateur-credit-libre/simulateur-credit-libre.component';
import { TabAmortissementLibreComponent } from './components/pages/simulateur-credit-libre/tab-amortissement-libre/tab-amortissement-libre.component';
import { ConfigOffreAssuranceComponent } from './components/pages/assurance/config-offre-assurance/config-offre-assurance.component';
import {NgWizardModule} from 'ng-wizard';
import { OffresAssureursComponent } from './components/pages/assurance/offres-assureurs/offres-assureurs.component';
import { SideBarOffresAssureursComponent } from './components/pages/assurance/offres-assureurs/side-bar-offres-assureurs/side-bar-offres-assureurs.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BankOffreAssurListComponent } from './components/pages/assurance/bank-offre-assur-list/bank-offre-assur-list.component';
import { OffreValidationComponent } from './components/pages/assurance/offre-validation/offre-validation.component';
import { ContractRegistrationComponent } from './components/pages/assurance/contract-registration/contract-registration.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { ContractsListAgComponent } from './components/pages/assurance/contracts-list-ag/contracts-list-ag.component';
import { ContractsListClientComponent } from './components/pages/assurance/contracts-list-client/contracts-list-client.component';
import { AdminCreditLibreComponent } from './components/pages/admin-credit-libre/admin-credit-libre.component';
import { DialogueComponent } from './components/pages/admin-credit-libre/dialogue/dialogue.component';

import { CompteepargneComponent } from './components/compteepargne/compteepargne.component';
import { UsercompteComponent } from './components/pages/usercompte/usercompte.component';
import { TransactionValidComponent } from './components/pages/transaction-valid/transaction-validation.component';
import { CurrencyconvComponent } from './components/pages/currencyconv/currencyconv.component';

import { QuantiteAchatComponent } from './components/pages/marcheactions/quantiteAchat/quantite-achat/quantite-achat.component';
import { PortfeuilleComponent } from './components/pages/portfeuille/portfeuille/portfeuille.component';
import { AddPortfeuilleComponent } from './components/pages/portfeuille/add-portfeuille/add-portfeuille.component';
import { OrdreComponent } from './components/pages/ordre/ordre/ordre.component';

import {MatDialogModule} from '@angular/material/dialog';
import { UtilisateurProfileComponent } from './components/pages/utilisateur-profile/utilisateur-profile.component';
import { BarSideProfileComponent } from './components/pages/utilisateur-profile/bar-side-profile/bar-side-profile.component';

import { CreateCreditComponent } from './components/pages/CreditImmob/create-credit/create-credit.component';
import { ListesCreditsComponent } from './components/pages/CreditImmob/listes-credits/listes-credits.component';
import { CreditDetailComponent } from './components/pages/CreditImmob/credit-detail/credit-detail.component';

import { SimulateurCreditImmobComponent } from './components/pages/simulateur-credit-immob/simulateur-credit-immob.component';

import { TabAmorComponent } from './components/pages/simulateur-credit-immob/tab-amor/tab-amor.component';
import { ListeCreditBackComponent } from './components/pages/CreditImmob/liste-credit-back/liste-credit-back.component';
import { ListCreditsComponent } from './components/pages/CreditEtudiant/list-credits/list-credits.component';
import { ListCreditsBackComponent } from './components/pages/CreditEtudiant/list-credits-back/list-credits-back.component';
import { CreditEtuComponent } from './components/pages/CreditEtudiant/credit-etu/credit-etu.component';



import { AuthInterceptor } from './helpers/authInterceptor';
import { AffecterSalaireComponent } from './components/pages/affecter-salaire/affecter-salaire.component';
import { DialogueSComponent } from './components/pages/affecter-salaire/dialogue-s/dialogue-s.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    QuantiteAchatComponent,
    OrdreComponent,
    CreateCreditComponent,
    CompteComponent,
    ListesCreditsComponent,
    PortfeuilleComponent,
    OffreassuranceComponent,
    OffreassurancedetailComponent,
    OffreassurancelistComponent,
    MarcheactionsComponent,
    DetailsActionComponent,

    AddOffreAssuranceComponent,
    CreditLibreComponent,

    ComptecourantComponent,


    ComptecourantComponent,


    GarantieComponent,
    AjoutCreditLibreComponent,
    SimulateurCreditLibreComponent,
    TabAmortissementLibreComponent,
    AdminCreditLibreComponent,
    DialogueComponent,
    UtilisateurProfileComponent,
    BarSideProfileComponent,
    CompteepargneComponent,
    UsercompteComponent,
    TransactionValidComponent,
    CurrencyconvComponent,
    QuantiteAchatComponent,
    PortfeuilleComponent,
    AddPortfeuilleComponent,
    OrdreComponent,
    CreateCreditComponent,
    ListesCreditsComponent,
    TabAmortissementLibreComponent,
    AffecterSalaireComponent,
    DialogueSComponent,

    CreditDetailComponent,
    SimulateurCreditImmobComponent,
    TabAmorComponent,
    ListeCreditBackComponent,
    ListCreditsComponent,
    ListCreditsBackComponent,
    CreditEtuComponent,
    TabAmortissementLibreComponent,
    ConfigOffreAssuranceComponent,
    OffresAssureursComponent,
    SideBarOffresAssureursComponent,
    BankOffreAssurListComponent,
    OffreValidationComponent,
    ContractRegistrationComponent,
    ContractsListAgComponent,
    ContractsListClientComponent,
    DashboardComponent

  ],

  entryComponents: [
    DialogueComponent,
    DialogueSComponent
 ],

  imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        ReactiveFormsModule,
        AngularEditorModule,
        NgWizardModule,
        NgxPaginationModule,
        SlickCarouselModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    OffresAssureursComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
