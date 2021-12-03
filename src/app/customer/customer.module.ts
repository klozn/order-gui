import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import {FormsModule} from "@angular/forms";
import { CustomerLastnameFilterPipe } from './pipe/customer-lastname-filter.pipe';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {RouterModule} from "@angular/router";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';



@NgModule({
  declarations: [
    CustomerOverviewComponent,
    CustomerLastnameFilterPipe,
    CreateCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CustomerModule { }
