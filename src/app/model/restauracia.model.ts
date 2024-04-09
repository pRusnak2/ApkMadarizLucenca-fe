export class Restauracia {
  id_restauracie: number|null;
  name: string;
  type: string;
  telNumber: number;
  username: string;
  password: string;
  cityName: string;
  streetName: string;
  postCode: number;


  constructor(id_restauracie: number | null, nazov: string, typ: string, tel_cislo: number, username: string, heslo: string, ulica: string, mesto: string, psc: number) {
    this.id_restauracie = id_restauracie;
    this.name = nazov;
    this.type = typ;
    this.telNumber = tel_cislo;
    this.username = username;
    this.password = heslo;
    this.cityName = mesto;
    this.streetName = ulica;
    this.postCode = psc;
  }
}
