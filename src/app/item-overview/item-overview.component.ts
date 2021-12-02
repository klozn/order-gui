import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Item} from "../item";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  items: Item[] = [];
  itemImageSrc = './assets/img/item-image.png';
  private greenWarningIconSrc = './assets/img/warning-icon-green.png';
  private yellowWarningIconSrc = './assets/img/warning-icon-yellow.png';
  private redWarningIconSrc = './assets/img/warning-icon-red.png';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  getWarningIcon(item: Item): string {
    if (item.stockUrgency === 'HIGH') {
      return this.greenWarningIconSrc;
    } else if (item.stockUrgency === 'MEDIUM') {
      return this.yellowWarningIconSrc;
    }
    return this.redWarningIconSrc;
  }
}
