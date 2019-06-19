import { Component, OnInit } from '@angular/core';
import { MacoService } from '../services/maco.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  constructor(private service: MacoService) {}

  ngOnInit(): void {
    this.service.getCharacters();
  }
}
