import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionEditComponent } from './transaction-edit.component';
import { TransactionEditRoutingModule } from './transaction-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TransactionEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TransactionEditComponent
  ]
})
export class TransactionEditModule { }
