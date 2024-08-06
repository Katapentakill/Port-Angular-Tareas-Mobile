import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtPayload } from './jwt-payload.interface';  // Asegúrate de tener esta interfaz definida

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Reemplaza con tu URL de backend

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(email: string, password: string): Observable<{ token: string }> {
    const url = `${this.apiUrl}/register`;
    const body = { email, password };
    return this.http.post<{ token: string }>(url, body);
  }

  // Método para autenticar un usuario
  login(email: string, password: string): Observable<{ token: string }> {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };
    return this.http.post<{ token: string }>(url, body);
  }

  // Método para verificar el estado de autenticación
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Método para obtener el payload del token
  getTokenPayload(): JwtPayload | null {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    return this.decodeToken(token);
  }

  // Método para verificar si el usuario tiene rol "Admin"
  isAdmin(): boolean {
    const payload = this.getTokenPayload();
    return payload ? payload.role === 'Admin' : false;
  }

  private decodeToken(token: string): JwtPayload | null {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload)) as JwtPayload;
    } catch (error) {
      console.error('Failed to decode token', error);
      return null;
    }
  }
}
