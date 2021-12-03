import {Email} from "./email";
import {Address} from "./address";
import {PhoneNumber} from "./phone-number";

export interface Customer {
  id: string,
  firstname: string,
  lastname: string,
  email: Email,
  address: Address,
  phoneNumber: PhoneNumber
}
