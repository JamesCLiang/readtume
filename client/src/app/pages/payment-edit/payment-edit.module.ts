import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentEditComponent } from './payment-edit.component';
import { PaymentEditRoutingModule } from './payment-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PaymentEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PaymentEditComponent
  ]
})
export class PaymentEditModule { }
