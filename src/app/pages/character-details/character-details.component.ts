import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharactersRequestsService } from '../../services/characters-requests.service';


interface Character {
  name: string,
  description: string,
  thumbnail: {
    path: string
    extension: string
  },
  comics: string[],
  series: string[]
}

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character: Character | null = null;

  constructor(private activatedRoute: ActivatedRoute, private charactersRequestsService: CharactersRequestsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const characterId = params['id'];
      this.getCharacter(characterId);
    });
  }

  getCharacter(character_id: number) {
    this.charactersRequestsService.getCharacter(character_id)
      .subscribe((characters: any[]) => {
        console.log(characters[0]);
        this.character = {
          name: characters[0].name,
          description: characters[0].description,
          thumbnail: {
            path: characters[0].thumbnail.path,
            extension: characters[0].thumbnail.extension,
          },
          comics: characters[0].comics.items.map((item: any) => item.name),
          series: characters[0].series.items.map((item: any) => item.name),
        }
      });
  }

}
