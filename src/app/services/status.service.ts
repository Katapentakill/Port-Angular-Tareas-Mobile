import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'http://localhost:3000/status'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  getAllStatuses(): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.apiUrl}/allStatus`);
  }
}
