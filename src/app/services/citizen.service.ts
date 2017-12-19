import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CitizenService {
  private citizensUrl = this.http.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
  constructor( private http: HttpClient) { }
  getCitizens(): void{
    console.log(this.citizensUrl);

  }
}
