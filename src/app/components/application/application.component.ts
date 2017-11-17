import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../../services/cartService/cart.service'
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  a: number = 0;
  b: number = 0;
  constructor(public cart: CartService) {
   
  }

  ngOnInit() {
  }

}
