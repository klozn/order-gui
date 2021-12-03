import {Email} from "./email";
import {Address} from "./address";
import {PhoneNumber} from "./phone-number";

export interface CreateCustomer {
  firstname: string,
  lastname: string,
  email: Email,
  address: Address,
  phoneNumber: PhoneNumber
}
