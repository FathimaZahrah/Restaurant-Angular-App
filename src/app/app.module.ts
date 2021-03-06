import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SearchrestaurantComponent } from './searchrestaurant/searchrestaurant.component';
import { PaymentComponent } from './payment/payment.component';
import { NewfoodComponent } from './newfood/newfood.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SearchrestaurantComponent,
    PaymentComponent,
    NewfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
