import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list.component';
import { PaymentListRoutingModule } from './payment-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PaymentListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PaymentListComponent
  ]
})
export class PaymentListModule { }
