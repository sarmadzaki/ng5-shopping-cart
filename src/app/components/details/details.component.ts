import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productService/product.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 d: any;
  constructor(private route: ActivatedRoute, public products: ProductService) { 

  }

  ngOnInit() {
  this.d = this.products.data;
  this.route.params.subscribe(data => {
      console.log(data);
     console.log('something', this.d)
    })
  }
}
 