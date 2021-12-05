import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NorthwindAngular';
  user:string = 'Emre Bayrak';
  product1 = { productId: 1, productName: 'Elbise', categoryId: 1, unitsInPrice: 2 }
  product2 = { productId: 2, productName: 'Bilgisayar', categoryId: 1, unitsInPrice: 20000 }
  product3 = { productId: 3, productName: 'Elma', categoryId: 1, unitsInPrice: 20 }
  product4 = { productId: 4, productName: 'Kulaklık', categoryId: 1, unitsInPrice: 2000 }
  product5 = { productId: 5, productName: 'Ayakkabı', categoryId: 1, unitsInPrice: 200 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5];
}
