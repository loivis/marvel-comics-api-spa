import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../types/characters';
import { ConcatSource } from 'webpack-sources';

const GET_CHARS = gql`
  {
    characters {
      items {
        id
        name
        description
        modified
        thumbnail
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class MacoService {
  constructor(private apollo: Apollo) {}

  getCharacters(
    page = 0,
    pageSize = 10,
    orderBy = 'name'
  ): Observable<Character[]> {
    return this.apollo.query({ query: GET_CHARS }).pipe(
      map(result => {
        if (result.data) {
          const data = result.data as { characters: { items: Character[] } };
          return data.characters.items;
        }
      })
    ) as Observable<Character[]>;
  }
}
