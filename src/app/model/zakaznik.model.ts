export class Zakaznik {
  id_zakaznika: number|null;
  meno: string;
  tel_cislo: number;
  email: string;
  heslo: string;
  mesto: string;
  ulica: string;
  psc: number;


  constructor(id_zakaznika: number|null, meno: string,tel_cislo: number, email: string, heslo: string, ulica: string, mesto: string, psc: number) {
    this.id_zakaznika = id_zakaznika;
    this.meno = meno;
    this.tel_cislo = tel_cislo;
    this.email = email;
    this.heslo = heslo;
    this.mesto = mesto;
    this.ulica = ulica;
    this.psc = psc;
  }
}
