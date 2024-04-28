import { Routes } from '@angular/router';
import {RestauracieComponent} from "./restauracie/restauracie.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {PrihlasenieComponent} from "./prihlasenie/prihlasenie.component";
import {RegistraciaComponent} from "./registracia/registracia.component";
import {RestauraciaFormularComponent} from "./restauracia-formular/restauracia-formular.component";
import {RestauraciaDetailComponent} from "./restauracia-detail/restauracia-detail.component";
import {ObjednavkyComponent} from "./objednavky/objednavky.component";
import {UvodComponent} from "./uvod/uvod.component";
import {JedloFormularComponent} from "./jedlo-formular/jedlo-formular.component";
import {KosikComponent} from "./kosik/kosik.component";
import {CastoKladeneOtazkyComponent} from "./footer content/casto-kladene-otazky/casto-kladene-otazky.component";
import {ONasComponent} from "./footer content/o-nas/o-nas.component";
import {BlogComponent} from "./footer content/social-media/blog/blog.component";
import {FacebookComponent} from "./footer content/social-media/facebook/facebook.component";
import {InstagramComponent} from "./footer content/social-media/instagram/instagram.component";
import {XComponent} from "./footer content/social-media/x/x.component";

export const routes: Routes = [
  { path: 'restauracie', component: RestauracieComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'prihlasenie', component: PrihlasenieComponent },
  { path: 'restauracia-formular', component: RestauraciaFormularComponent },
  { path: 'registracia', component: RegistraciaComponent },
  { path: 'restauracia-detail/:restaurantId', component: RestauraciaDetailComponent },
  { path: '', component: UvodComponent },
  {path: 'objednavky', component: ObjednavkyComponent},
  {path: 'kosik', component: KosikComponent},
  {path: 'jedlo-formular', component: JedloFormularComponent}
  {path: 'jedlo-formular', component: JedloFormularComponent},
  {path: 'casto-kladene-otazky', component: CastoKladeneOtazkyComponent},
  {path: 'o-nas', component: ONasComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'facebook', component: FacebookComponent},
  {path: 'instagram', component: InstagramComponent},
  {path: 'x', component: XComponent}
];
