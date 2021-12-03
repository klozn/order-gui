import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {FormsModule} from "@angular/forms";
import {ItemNameFilterPipe} from "./pipe/item-name-filter.pipe";
import { CreateItemComponent } from './create-item/create-item.component';
import {RouterModule} from "@angular/router";
import {UtilityModule} from "../utility/utility.module";

@NgModule({
  declarations: [
    ItemOverviewComponent,
    ItemNameFilterPipe,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UtilityModule
  ]
})
export class ItemModule { }
