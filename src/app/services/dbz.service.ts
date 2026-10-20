import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DbzCharacter, DbzPage } from '../interfaces/dbz-character';

@Injectable({ providedIn: 'root' })
export class DbzService {
  private http = inject(HttpClient);
  private api = 'https://dragonball-api.com/api/characters';

  getPage(page: number, limit: number): Observable<DbzPage> {
    const params = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<DbzPage>(this.api, { params });
  }

  getById(id: number): Observable<DbzCharacter> {
    return this.http.get<DbzCharacter>(`${this.api}/${id}`);
  }
}
