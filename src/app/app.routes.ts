import { Routes } from '@angular/router';
import {UvodComponent} from "./uvod/uvod.component";
import {RestauracieComponent} from "./restauracie/restauracie.component";
import {MestaComponent} from "./mesta/mesta.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {PrihlasenieComponent} from "./prihlasenie/prihlasenie.component";
import {RegistraciaComponent} from "./registracia/registracia.component";
import {RestauraciaFormularComponent} from "./restauracia-formular/restauracia-formular.component";

export const routes: Routes = [
  { path: 'uvod', component: UvodComponent },
  { path: 'restauracie', component: RestauracieComponent },
  { path: 'mesta', component: MestaComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'prihlasenie', component: PrihlasenieComponent },
  { path: 'restauracia-formular', component: RestauraciaFormularComponent },
  { path: 'registracia', component: RegistraciaComponent }

];
