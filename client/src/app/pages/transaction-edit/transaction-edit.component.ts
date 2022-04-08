// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TransactionService } from '../../services/transaction.service';
import { PaymentService } from '../../services/payment.service';
// Import Models
import { Transaction } from '../../domain/readtume_db/transaction';
import { Payment } from '../../domain/readtume_db/payment';

// START - USED SERVICES
/**
* TransactionService.create
*	@description CRUD ACTION create
*
* TransactionService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* TransactionService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* PaymentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Transaction
 */
@Component({
    selector: 'app-transaction-edit',
    templateUrl: 'transaction-edit.component.html',
    styleUrls: ['transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
    item: Transaction;
    listPayment_transaction: Payment[];
    model: Transaction;
    formValid: Boolean;

    constructor(
    private transactionService: TransactionService,
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Transaction();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.transactionService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.paymentService.list().subscribe(list => this.listPayment_transaction = list);
        });
    }


    /**
     * Save Transaction
     *
     * @param {boolean} formValid Form validity check
     * @param Transaction item Transaction to save
     */
    save(formValid: boolean, item: Transaction): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.transactionService.update(item).subscribe(data => this.goBack());
            } else {
                this.transactionService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



