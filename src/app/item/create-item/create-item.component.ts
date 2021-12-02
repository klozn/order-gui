import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Location} from "@angular/common";
import {CreateItem} from "../createItem";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: CreateItem = new CreateItem();

  constructor(private itemService: ItemService, private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.itemService.addItem(this.item).subscribe();
    this.goBack();
  }
}
