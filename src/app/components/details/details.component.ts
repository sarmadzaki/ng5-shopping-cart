import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productService/product.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  constructor(public route: ActivatedRoute, public product: ProductService) {

  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.data = this.product.data.filter(res => {
        return res.name == data.name;
      });
    });
  }

}
