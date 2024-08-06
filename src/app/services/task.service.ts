import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/task'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  getTasksByStatus(statusId: number): Observable<Task[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Task[]>(`${this.apiUrl}/byStatus/${statusId}`, { headers });
  }

  getTaskById(taskId: number): Observable<Task> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Task>(`${this.apiUrl}/TagByTask/${taskId}`, { headers });
  }

  assignStatus(statusId: number, taskId: number): Observable<Task> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<Task>(`${this.apiUrl}/assignStatus/${statusId}/${taskId}`, {}, { headers });
  }
}
