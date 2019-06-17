import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboadComponent } from './component/dashboad/dashboad.component';
import { ManageCustomerComponent } from './component/manage-customer/manage-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboadComponent,
    ManageCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
