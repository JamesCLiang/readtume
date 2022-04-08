import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PaymentService } from '../../services/payment.service';
// Import Models
import { Payment } from '../../domain/readtume_db/payment';

// START - USED SERVICES
/**
* PaymentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* PaymentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Payment
 * @class PaymentListComponent
 */
@Component({
    selector: 'app-payment-list',
    templateUrl: './payment-list.component.html',
    styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
    list: Payment[];
    search: any = {};
    idSelected: string;
    constructor(
        private paymentService: PaymentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.paymentService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Payment to remove
     *
     * @param {string} id Id of the Payment to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Payment
     */
    deleteItem() {
        this.paymentService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
