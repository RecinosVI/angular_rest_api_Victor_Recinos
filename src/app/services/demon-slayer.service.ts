
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemonSlayerCharacter } from '../interfaces/demon-slayer-character';

export interface DemonSlayerResponse {
  pagination: {
    totalElements: number;
    elementsOnPage: number;
    currentPage: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
  };
  content: DemonSlayerCharacter[];
}

@Injectable({ providedIn: 'root' })
export class DemonSlayerService {
  private http = inject(HttpClient);
  private url = 'https://www.demonslayer-api.com/api/v1/characters';

  getAll(page: number = 1): Observable<DemonSlayerResponse> {
    return this.http.get<DemonSlayerResponse>(
      `${this.url}?page=${page}`
    );
  }

  getById(id: number): Observable<DemonSlayerCharacter> {
    return this.http.get<DemonSlayerCharacter>(
      `${this.url}/${id}`
    );
  }
}
