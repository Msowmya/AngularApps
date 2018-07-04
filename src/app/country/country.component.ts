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
  constructor() { }

  ngOnInit() {
  }

  vote() {
    const voteData = {
      name: this.name,
      qty: 1
    };
    this.voting.emit(voteData);
  }

}
