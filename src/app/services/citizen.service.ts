import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CitizenService {
  private citizensUrl = $http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
  constructor(
    private httpClient: HttpClient,

  ){}

  getCitizens (): void {
    console.log(this.citizensUrl)
    return this.citizensUrl
  }
}
