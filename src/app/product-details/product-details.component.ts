import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Produto } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  
  produto: Produto[]=[];

  constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private location: Location,
  ) {}

  ngOnInit(): void {
	  this.getProducts();
  }


  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProducts()
      .subscribe(produto => this.produto = produto);
  }

  goBack(): void {
    this.location.back();
  }

}
