import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private httpclient: HttpClient,
  ) { }

  //http://localhost:5216/weatherforecast
  weatherforecast(): Observable<any> {   
    return this.httpclient.get('http://localhost:5216/weatherforecast');
  }
}
