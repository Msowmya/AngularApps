import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() name = 'The country';
  @Input() flag = "http://via.placeholder.com/50x50";
  constructor() { }

  ngOnInit() {
  }

}
