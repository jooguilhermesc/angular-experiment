import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Produto } from './products';
import { PRODUTOS } from './example-products'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 	constructor(private messageService: MessageService) { }

 	/** GET produtos from the server */
 	getProducts(): Observable<Produto[]> {
 		const produtos = of(PRODUTOS);
	    this.messageService.add('ProductService: fetched produtos');
	    return produtos;
 	}

 	/** GET produtos by id. Will 404 if id not found */
 	getProduto(id: number): Observable<Produto> {
	    const produto = PRODUTOS.find(h => h.id === id) as Produto;
	    this.messageService.add(`ProductService: fetched produto id=${id}`);
	    return of(produto);
  	}
  }
