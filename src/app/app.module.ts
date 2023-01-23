import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule,LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
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
import { CompteepargneComponent } from './components/compteepargne/compteepargne.component';
import { UsercompteComponent } from './components/pages/usercompte/usercompte.component';
import { TransactionValidComponent } from './components/pages/transaction-valid/transaction-validation.component';
import { CurrencyconvComponent } from './components/pages/currencyconv/currencyconv.component';

import { QuantiteAchatComponent } from './components/pages/marcheactions/quantiteAchat/quantite-achat/quantite-achat.component';
import { PortfeuilleComponent } from './components/pages/portfeuille/portfeuille/portfeuille.component';
import { AddPortfeuilleComponent } from './components/pages/portfeuille/add-portfeuille/add-portfeuille.component';
import { OrdreComponent } from './components/pages/ordre/ordre/ordre.component';

import { CreateCreditComponent } from './components/pages/CreditImmob/create-credit/create-credit.component';
import { ListesCreditsComponent } from './components/pages/CreditImmob/listes-credits/listes-credits.component';
import { ComptechoixComponent } from './components/comptechoix/comptechoix.component';
import { UsercompteEpComponent } from './components/pages/usercompte-ep/usercompte-ep.component';
import { AjouterFormationComponent } from './components/pages/formation/ajouter-formation/ajouter-formation.component';
import { FormationsComponent } from './components/pages/formation/formations/formations.component';
import { OneFormationComponent } from './components/pages/formation/one-formation/one-formation.component';




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
    ComptechoixComponent,
    UsercompteEpComponent,
    AjouterFormationComponent,
    FormationsComponent,
    OneFormationComponent,
   
    


  ],

  imports:[
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
        MatDialogModule,
        ReactiveFormsModule,
        AngularEditorModule
    ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
