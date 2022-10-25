import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MarcheactionsComponent } from './components/pages/marcheactions/marcheactions.component';
import {SharedModule} from './components/shared/shared.module';
import { DetailsActionComponent } from './components/pages/marcheactions/details-action/details-action.component';
import {MatTableModule, MatTabsModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MarcheactionsComponent,
    DetailsActionComponent
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
        MatTabsModule
    ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
