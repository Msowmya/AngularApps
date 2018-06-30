import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  countries: any[];

  constructor() {
    this.name = 'Sowmya';
  }
  ngOnInit() {
    console.log('Hello from ngOnInit');
    fetch('https://restcountries.eu/rest/v2/all')
    .then(
      data => {
        return data.json();
      }
    )
    .then (
      countries => {
        this.countries = countries;
        console.log(this.countries);
      }
    );
  }
  myfunc() {
    console.log('Hello World');
    this.name = 'Ramya';
  }

}
