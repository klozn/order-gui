import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "../customer";

@Pipe({
  name: 'customerLastnameFilter'
})
export class CustomerLastnameFilterPipe implements PipeTransform {

  transform(customers: Customer[], lastname: string): Customer[] {
    lastname = lastname.toLocaleLowerCase();
    return customers.filter(customer => customer.lastname.toLocaleLowerCase().startsWith(lastname));
  }

}
