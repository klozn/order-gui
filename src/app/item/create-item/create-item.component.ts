import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Router} from "@angular/router";
import {CreateItem} from "../createItem";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: CreateItem = {
    name: '',
    description: '',
    price: 0,
    amountOfStock: 0
  }

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.itemService.addItem(this.item).subscribe();
    this.router.navigate(['/items']);
  }
}
