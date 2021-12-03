import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item/item-overview/item-overview.component";
import {CreateItemComponent} from "./item/create-item/create-item.component";
import {ItemDetailComponent} from "./item/item-detail/item-detail.component";
import {CustomerOverviewComponent} from "./customer/customer-overview/customer-overview.component";

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemOverviewComponent },
  { path: 'createItem', component: CreateItemComponent },
  { path: 'items/:itemId', component: ItemDetailComponent },
  { path: 'customers', component: CustomerOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
