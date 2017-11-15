import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { CartService } from '../../services/cartService/cart.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data;
  searchTerm: string;
  acs: string;
  isSort: boolean = true;
  isSearch: boolean = true;
  constructor(public product: ProductService, public cart: CartService) { }
  ngOnInit() {
    this.product.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

  addCart(index, price) {
    this.cart.addToCart(index, price);
  }
  onSearch(value) {
    console.log('instance', value)
  }
 sorting() {
   this.isSort = !this.isSort;
 }
 search() {
   this.isSearch = !this.isSearch;
 }
}
