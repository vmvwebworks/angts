import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../services/citizen.service';

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.css']
})
export class CitizensComponent implements OnInit {
  getCitizens(): void{
    this.citizenService.getCitizens()
  }
  constructor(private citizenService: CitizenService){}

  ngOnInit(){
    this.getCitizens()
  }

}
