import { Component, OnInit } from '@angular/core';
import { Produto } from '../products'
import { ProductService } from '../product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  produtos: Produto[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts().subscribe(produtos => this.produtos = produtos)
  }

}
