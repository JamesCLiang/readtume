import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionEditComponent } from './transaction-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionEditRoutingModule { }
