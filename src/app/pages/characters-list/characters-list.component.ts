import { Component, OnInit } from '@angular/core';

import { CharactersRequestsService } from '../../services/characters-requests.service';

interface Character {
  id: number,
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  charactersList: Character[] | null = null;

  constructor(private charactersRequestsService: CharactersRequestsService) { }

  ngOnInit(): void {
    this.getCharactersList();
  }

  getCharactersList() {
    this.charactersRequestsService.getCharactersList()
      .subscribe(characters => {
        this.charactersList = characters.map((character: any) => {
          return {
            id: character.id,
            name: character.name,
            thumbnail: {
              path: character.thumbnail.path,
              extension: character.thumbnail.extension,
            }
          }
        });

      });
  }

}
