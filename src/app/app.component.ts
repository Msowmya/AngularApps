import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  countries: any[];
  selectedCountry: any = {
    name: 'name',
    flag: 'http://via.placeholder.com/50x50',
    population: '123456'
  };
  total = 0;
  voters: any[] = [];

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
        this.selectedCountry = countries[0];
        console.log(this.countries);
      }
    );
  }

  myfunc() {
    console.log('Hello World');
    this.name = 'Ramya';
  }

  showCountry(country) {
    this.selectedCountry = country;
  }

  vote(voteData) {
    const exist = this.voters.some(voter => voter.name === voteData.name);
    if (!exist) {
      this.voters.push(voteData);
    }
    this.total += voteData.qty;
    console.log('voteData:', voteData);
  }

}
