import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentEditComponent } from './payment-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentEditRoutingModule { }
