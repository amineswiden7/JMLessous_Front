import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};



import { SharedModule } from '../../shared/shared.module';

import { AjoutCreditLibreComponent } from './ajout-credit-libre/ajout-credit-libre.component';
import { CreditLibreComponent } from './credit-libre.component';
import { CreditLibreRoutingModule } from './credit-libre-routing.module';

@NgModule({
  declarations: [CreditLibreComponent, AjoutCreditLibreComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgWizardModule.forRoot(ngWizardConfig),
    CreditLibreRoutingModule,
    SharedModule
  ]
})
export class CreditLibreModule { }
