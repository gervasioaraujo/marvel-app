import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersRequestsService {

  PUBLIC_KEY = '0fd634e27617fdf59ae9e1f267aa3dc3';
  HASH = '';
  BASE_URL_API = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) { }

  getCharactersList(): Observable<any> {
    const URL_API = `${this.BASE_URL_API}?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get<any>(URL_API).pipe(map((response: any) => response.data.results));
    // return this.http.get<any>(URL_API);
  }

  getCharacter(character_id: number): Observable<any> {
    const URL_API = `https://gateway.marvel.com:443/v1/public/characters/${character_id}?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this.http.get<any>(URL_API).pipe(map((response: any) => response.data.results));
  }
}
