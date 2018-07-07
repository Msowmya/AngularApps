import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityService } from './services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  countries: any;
  selectedCountry: any = {
    name: 'name',
    flag: 'http://via.placeholder.com/50x50',
    population: '123456'
  };
  total = 0;
  voters: any[] = [];
  myUrl: string;
  myJsonCities: string;
  cities: any[];

  constructor(public http: HttpClient, private cityService: CityService) {
    this.name = 'John';
    this.myJsonCities = 'assets/cities.json';
    this.myUrl = 'https://restcountries.eu/rest/v2/all';
  }
  ngOnInit() {
    this.getCities();
    const persona = {
      'name': 'Sowmya',
      'email': 'abc@gmail.com'
    };
    this.cityService.get(persona);
    // this.http.get(this.myUrl)
    // .subscribe(countries => {
    //   this.countries = countries;
    //   this.selectedCountry = countries[0];
    //   console.log(this.countries);
    // });

    // console.log('Hello from ngOnInit');
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(
    //   data => {
    //     console.log('pass 1', data);
    //     return data.json();
    //   }
    // )
    // .then (
    //   countries => {
    //     console.log('pass 2', countries);
    //     this.countries = countries;
    //     this.selectedCountry = countries[0];
    //   //  console.log(this.countries);
    //   }
    // );
  }

  getCities() {
    // this.http.get(this.myJsonCities)
    // .subscribe((data: any) => {
    //   this.cities = data.cities;
    //   console.log(this.cities);
    // });
  }

  myfunc() {
    this.name = 'Doe';
  }

  showCountry(country) {
    this.selectedCountry = country;
  }

  vote(voteData) {
    const exist = this.voters.some(voter => voter.name === voteData.name);
    if (!exist) {
    this.voters.push(voteData);
    this.total += voteData.qty;
    console.log('voteData:', voteData);
    }
  }

}
