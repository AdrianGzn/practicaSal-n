import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Info } from '../models/info';
import { map, catchError, tap } from 'rxjs/operators';
import { CharacterById } from '../models/characterById';

@Injectable({
  providedIn: 'root'
})
export class DrangonServiceService {
  constructor(readonly httpClient: HttpClient) { }
  private apiUrl = 'https://dragonball-api.com/api';

  getAll(): Observable<Info | any> {
    return this.httpClient.get<Info>(this.apiUrl+'/characters').pipe(
      catchError(error => {
        console.error('Error al obtener todos los usuarios: ', error);
        throw error;
      })
    );
  }

  getCharacter(id: string): Observable<CharacterById | any> {
    return this.httpClient.get<CharacterById>(this.apiUrl+'/characters/'+id).pipe(
      catchError(error => {
        console.error('Error al obtener la data del personaje: ', error);
        throw error;
      })
    );
  }
}
