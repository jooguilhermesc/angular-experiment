import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 	{ path: 'dashboard', component: DashboardComponent },
 	{ path: 'detail/:id', component: ProductDetailsComponent },
 	{ path: 'produtos', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }