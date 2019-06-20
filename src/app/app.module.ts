import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboadComponent } from './component/dashboad/dashboad.component';
import { ManageCustomerComponent } from './component/manage-customer/manage-customer.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from './services/customer.service';
import { ManageItemComponent } from './component/manage-item/manage-item.component';
import { PlaceOrderComponent } from './component/place-order/place-order.component';
import {ItemService} from './services/item.service';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboadComponent,
    ManageCustomerComponent,
    ManageItemComponent,
    PlaceOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
