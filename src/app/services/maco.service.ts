import { Injectable } from '@angular/core';
import { global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class MacoService {
  private endpoint;
  constructor() {
    this.endpoint = global.endpoint;
  }

  getCharacters(): void {
    console.log(this.endpoint);
  }
}
