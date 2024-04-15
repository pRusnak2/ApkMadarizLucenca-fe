import { Routes } from '@angular/router';
import {RestauracieComponent} from "./restauracie/restauracie.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {PrihlasenieComponent} from "./prihlasenie/prihlasenie.component";
import {RegistraciaComponent} from "./registracia/registracia.component";
import {RestauraciaFormularComponent} from "./restauracia-formular/restauracia-formular.component";

export const routes: Routes = [
  { path: 'restauracie', component: RestauracieComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'prihlasenie', component: PrihlasenieComponent },
  { path: 'restauracia-formular', component: RestauraciaFormularComponent },
  { path: 'registracia', component: RegistraciaComponent }

];
