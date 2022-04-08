import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TransactionService } from '../../services/transaction.service';
// Import Models
import { Transaction } from '../../domain/readtume_db/transaction';

// START - USED SERVICES
/**
* TransactionService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TransactionService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Transaction
 * @class TransactionListComponent
 */
@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
    list: Transaction[];
    search: any = {};
    idSelected: string;
    constructor(
        private transactionService: TransactionService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.transactionService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Transaction to remove
     *
     * @param {string} id Id of the Transaction to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Transaction
     */
    deleteItem() {
        this.transactionService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
