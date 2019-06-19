import { Component, OnInit } from '@angular/core';
import { MacoService } from 'src/app/services/maco.service';
import { Character } from 'src/app/types/characters';

@Component({
  selector: 'app-home-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[];

  length = 7;
  start = 0;

  constructor(private service: MacoService) {}

  ngOnInit() {
    this.service.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  // TODO: disable button if start = 0
  backward(): void {
    this.start -= this.length;
    console.log('new start index:', this.start);
  }

  // TODO: disable button if start + length exceeds characters count
  forward(): void {
    this.start += this.length;
    console.log('new start index:', this.start);
  }
}
