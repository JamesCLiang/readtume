/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE transactionBaseService PLEASE EDIT ../transaction.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Transaction } from '../../domain/readtume_db/transaction';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Transaction.service.ts
 */

/*
 * SCHEMA DB Transaction
 *
	{
		Amount: {
			type: 'Decimal'
		},
		Description: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Payment_transaction: {
			type: Schema.ObjectId,
			ref : "Transaction"
		},
	}
 *
 */
@Injectable()
export class TransactionBaseService {

    contextUrl: string = environment.endpoint + '/transaction';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * TransactionService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Transaction): Observable<Transaction> {
        return this.http
            .post<Transaction>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * TransactionService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TransactionService.findByPayment_transaction
    *   @description CRUD ACTION findByPayment_transaction
    *   @param Objectid key Id of model to search for
    *
    */
    findByPayment_transaction(id: string): Observable<Transaction[]> {
        return this.http
            .get<Transaction[]>(this.contextUrl + '/findByPayment_transaction/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TransactionService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Transaction> {
        return this.http
            .get<Transaction>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TransactionService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Transaction[]> {
        return this.http
            .get<Transaction[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * TransactionService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Transaction): Observable<Transaction> {
        return this.http
            .post<Transaction>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
