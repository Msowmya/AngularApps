import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input('name') nameCountry = 'The country';
  @Input() flag = 'http://via.placeholder.com/50x50';
  @Input() population = '123456';
  @Output() voting: EventEmitter<any> = new EventEmitter<any>();
  isFavourite = false;
  name = "";
  constructor() {}

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
    const elements: NodeListOf<Element> = document.getElementsByClassName('favourite');
    elements[0].classList.remove('favourite');
    localStorage.setItem('country', this.name);
    this.isFavourite = true;
    console.log(this.isFavourite);
  }

}
