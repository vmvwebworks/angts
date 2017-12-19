import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CitizenService} from './services/citizen.service';
import { AppComponent } from './app.component';
import { CitizensComponent } from './citizens/citizens.component';


@NgModule({
  declarations: [
    AppComponent,
    CitizensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CitizenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
