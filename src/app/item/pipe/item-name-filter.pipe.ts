import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../item";

@Pipe({
  name: 'itemNameFilter'
})
export class ItemNameFilterPipe implements PipeTransform {

  transform(items: Item[], searchTerm: string): Item[] {
    searchTerm = searchTerm.toLocaleLowerCase();
    return items.filter(item => item.name.toLocaleLowerCase().startsWith(searchTerm));
  }

}
