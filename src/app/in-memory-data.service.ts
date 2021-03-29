import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produto } from './products';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const produtos = [
	  { id: 11, nome: 'Celular' },
		{ id: 12, nome: 'Televisão' },
		{ id: 13, nome: 'Tablet' },
		{ id: 14, nome: 'Video Game' },
		{ id: 15, nome: 'Fones' },
		{ id: 16, nome: 'Cama' },
		{ id: 17, nome: 'Guitarra' },
		{ id: 18, nome: 'Computador' },
		{ id: 19, nome: 'Skate' },
		{ id: 20, nome: 'Kindle' }
    ];
    return {produtos};
  }

  genId(produtos: Produto[]): number {
    return produtos.length > 0 ? Math.max(...produtos.map(produto => produto.id)) + 1 : 11;
  }
}