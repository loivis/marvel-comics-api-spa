import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [CharactersComponent, HomeComponent],
  imports: [CommonModule]
})
export class HomeModule {}
