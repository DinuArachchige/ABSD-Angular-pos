import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadComponent } from './component/dashboad/dashboad.component';
import { ManageCustomerComponent } from './component/manage-customer/manage-customer.component';


const routes: Routes = [
  {
    path: 'dashboad',
    component: DashboadComponent
  },
  {
    path: 'manage-customer',
    component: ManageCustomerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboad'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
