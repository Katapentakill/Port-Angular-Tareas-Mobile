import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatusPage } from './status.page';
import { StatusRoutingModule } from './status-routing.module';
import { ComponentsModule } from "../../components/components.module"; // Importa el módulo de enrutamiento

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StatusRoutingModule // Importa el módulo de enrutamiento
    ,
    ComponentsModule
],
  declarations: [StatusPage] // Declara la página Status
})
export class StatusPageModule {}
