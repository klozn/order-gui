import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import {FormsModule} from "@angular/forms";
import { CustomerLastnameFilterPipe } from './pipe/customer-lastname-filter.pipe';



@NgModule({
  declarations: [
    CustomerOverviewComponent,
    CustomerLastnameFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomerModule { }
