import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';


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




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

    CompteComponent,

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
    ConfigOffreAssuranceComponent,
    OffresAssureursComponent,
    SideBarOffresAssureursComponent,
    BankOffreAssurListComponent,
    OffreValidationComponent,
    ContractRegistrationComponent,
    ContractsListAgComponent,
    ContractsListClientComponent


  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        MatTableModule,
        MatTabsModule,
        ReactiveFormsModule,
        AngularEditorModule,
        NgWizardModule,
        NgxPaginationModule,
        SlickCarouselModule
    ],
  providers: [OffresAssureursComponent ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
