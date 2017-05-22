import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MenuServiceService {
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  constructor(
    private http:Http
  ) { }

  getMenuList(){
   return this.http.get('https://www.easy-mock.com/mock/59128ab8acb959185b0ccece/admin/menu')
     .toPromise()
     .then(res =>res.json())
  }
}
