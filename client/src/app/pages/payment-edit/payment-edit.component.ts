// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PaymentService } from '../../services/payment.service';
import { TransactionService } from '../../services/transaction.service';
// Import Models
import { Payment } from '../../domain/readtume_db/payment';
import { Transaction } from '../../domain/readtume_db/transaction';

// START - USED SERVICES
/**
* PaymentService.create
*	@description CRUD ACTION create
*
* PaymentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* PaymentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* TransactionService.findByPayment_transaction
*	@description CRUD ACTION findByPayment_transaction
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Payment
 */
@Component({
    selector: 'app-payment-edit',
    templateUrl: 'payment-edit.component.html',
    styleUrls: ['payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {
    item: Payment;
    externalTransaction_Payment_transaction: Transaction[];
    model: Payment;
    formValid: Boolean;

    constructor(
    private paymentService: PaymentService,
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Payment();
        this.externalTransaction_Payment_transaction = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.paymentService.get(id).subscribe(item => this.item = item);
                this.transactionService.findByPayment_transaction(id).subscribe(list => this.externalTransaction_Payment_transaction = list);
            }
            // Get relations
        });
    }


    /**
     * Save Payment
     *
     * @param {boolean} formValid Form validity check
     * @param Payment item Payment to save
     */
    save(formValid: boolean, item: Payment): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.paymentService.update(item).subscribe(data => this.goBack());
            } else {
                this.paymentService.create(item).subscribe(data => this.goBack());
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



