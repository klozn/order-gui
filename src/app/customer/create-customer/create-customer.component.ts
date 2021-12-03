import { Component, OnInit } from '@angular/core';
import {Address} from "../address";
import {PhoneNumber} from "../phone-number";
import {Email} from "../email";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import {CreateCustomer} from "../create-customer";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  countries: string[] = ['Belgium', 'France', 'Germany'];
  email: Email = {
    localPart: '',
    domain: '',
    complete: ''
  }
  address: Address = {
    streetName: '',
    houseNumber: '',
    postalCode: '',
    country: this.countries[0]
  }
  phoneNumber: PhoneNumber = {
    number: '',
    countryCallingCode: ''
  }
  customer: CreateCustomer = {
    firstname: '',
    lastname: '',
    email: this.email,
    address: this.address,
    phoneNumber: this.phoneNumber
  }

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.email.complete = `${this.email.localPart}@${this.email.domain}`;
    this.customerService.addCustomer(this.customer)
      .subscribe(customer => this.router.navigate([`customers/${customer.id}`]));
  }
}
