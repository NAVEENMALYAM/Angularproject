import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(private _http: HttpClient) {
  }
  saveRegistrationForm(data: any): Observable<any> {
    return this._http.post('localhost:3000/saveRegistrationForm', data);
  }

}
