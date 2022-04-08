import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list.component';
import { TransactionListRoutingModule } from './transaction-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TransactionListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TransactionListComponent
  ]
})
export class TransactionListModule { }
