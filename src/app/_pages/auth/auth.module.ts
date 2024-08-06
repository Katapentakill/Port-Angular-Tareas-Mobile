import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule si usas formularios reactivos
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule para formularios reactivos
    IonicModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class AuthModule {}
