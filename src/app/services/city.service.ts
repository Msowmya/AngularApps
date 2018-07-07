import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  get(persona: any) {
    console.log('Working with service:', persona.name, persona.email);
  }
}
