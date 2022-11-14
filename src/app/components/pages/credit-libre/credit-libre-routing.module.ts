import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditLibreComponent } from './credit-libre.component';

const routes: Routes = [{ path: '', component: CreditLibreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditLibreRoutingModule { }
