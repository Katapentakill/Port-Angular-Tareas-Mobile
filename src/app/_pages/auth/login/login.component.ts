import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful', response);
          localStorage.setItem('authToken', response.token);
          if (!this.authService.isAdmin()) {
            this.router.navigate(['/status']); // Ajusta la ruta según sea necesario
          } else {
            this.errorMessage = 'No tienes acceso para realizar esta acción.';
          }
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Error de inicio de sesión. Por favor, verifica tus credenciales.';
        }
      );
    }
  }
}
