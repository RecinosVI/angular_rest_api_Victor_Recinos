import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonPage } from '../interfaces/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private api = 'https://pokeapi.co/api/v2/pokemon';

  getPage(pageIndex: number, pageSize: number): Observable<PokemonPage> {
    const params = new HttpParams().set('limit', pageSize).set('offset', pageIndex * pageSize);
    return this.http.get<PokemonPage>(this.api, { params });
  }

  getById(id: number): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.api}/${id}`);
  }
}
