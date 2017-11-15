import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/application/application.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { Http } from '@angular/http'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductService } from './services/productService/product.service'
import { CartService } from './services/cartService/cart.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component'
import { NgForm, FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    SidebarComponent,
    CheckoutComponent,
    HomeComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ProductService, HttpClientModule, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
