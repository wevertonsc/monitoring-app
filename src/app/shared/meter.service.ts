import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meter } from './model/meter.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MeterService {

  constructor(private http : HttpClient) { }

  getMeter(): Observable<Meter>{
    let uri = 'https://server-monitoring-v1.herokuapp.com/api/v1/meter';
    //let uri = 'http://localhost:8080/api/v1/meter';
    //return new Meter("123","Host1","55", "12:50");
    return this.http.get<Meter>(uri);
  }
}
