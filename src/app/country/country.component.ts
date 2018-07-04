import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() name = 'The country';
  @Input() flag = "http://via.placeholder.com/50x50";
  @Input() population = "123456";
  @Output() voting: EventEmitter<any> = new EventEmitter<any>();
  isFavourite = false;
  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('country'));
    const findItCountry = localStorage.getItem('country');
    if ( this.name === findItCountry ) {
      this.isFavourite = true;
    }
  }

  vote() {
    const voteData = {
      name: this.name,
      qty: 1
    };
    this.voting.emit(voteData);
  }

  setFavourite() {
    localStorage.setItem('country', this.name);
    this.isFavourite = true;
  }

}
