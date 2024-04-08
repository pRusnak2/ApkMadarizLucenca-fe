export class Restauracia {
  id_restauracie: number|null;
  nazov: string;
  typ: string;
  tel_cislo: number;
  heslo: string;
  mesto: string;
  ulica: string;
  psc: number;


  constructor(id_restauracie: number|null, nazov: string, typ: string, tel_cislo: number, heslo: string, ulica: string, mesto: string, psc: number) {
    this.id_restauracie = id_restauracie;
    this.nazov = nazov;
    this.typ = typ;
    this.tel_cislo = tel_cislo;
    this.heslo = heslo;
    this.mesto = mesto;
    this.ulica = ulica;
    this.psc = psc;
  }
}
