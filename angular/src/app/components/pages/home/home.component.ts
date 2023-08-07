import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Products: undefined | Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.productList().subscribe((data) => {
      this.Products = data;
      console.log(this.Products);
    });
  }
}
