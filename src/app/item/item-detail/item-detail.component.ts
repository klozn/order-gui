import { Component, OnInit } from '@angular/core';
import {Item} from "../item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  editing: boolean = false;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const id = String(this.route.snapshot.paramMap.get('itemId'));
    this.itemService.getItemById(id)
      .subscribe(item => this.item = item);
  }

  edit() {
    this.editing = true;
  }

  cancel() {
    this.getItem();
    this.editing = false;
  }

  update() {
    this.itemService.updateItem(this.item!).subscribe(item => this.item = item);
    this.editing = false;
  }

}
