import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Digimon } from '../interfaces/digimon';

@Injectable({ providedIn: 'root' })
export class DigimonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://digimon-api.vercel.app/api/digimon';

  getAll(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.apiUrl);
  }
}
