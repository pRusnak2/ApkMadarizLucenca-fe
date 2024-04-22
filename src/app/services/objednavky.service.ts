import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Objednavky} from "../model/objednavky.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ObjednavkyService {

  private apiUrlOrderDetail: string = "";

  constructor(private http: HttpClient) {
  }

}
