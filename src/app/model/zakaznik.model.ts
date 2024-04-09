export class Zakaznik {
  customerId: number|null;
  username: string;
  telNumber: number;
  email: string;
  password: string;
  cityName: string;
  streetName: string;
  postCode: number;
  firstName: string;
  lastName: string;


  constructor(customerId: number | null, username: string, telNumber: number, email: string, password: string, streetName: string, cityName: string, postCode: number, firstName: string, lastName: string) {
    this.customerId = customerId;
    this.username = username;
    this.telNumber = telNumber;
    this.email = email;
    this.password = password;
    this.cityName = cityName;
    this.streetName = streetName;
    this.postCode = postCode;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
