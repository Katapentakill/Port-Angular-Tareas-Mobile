import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusService } from '../services/status.service';

@NgModule({
  declarations: [
    StatusListComponent,
    // Otros componentes pueden ir aquí
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,

  ],
  providers: [
    StatusService,
  ],
  exports: [
    StatusListComponent,
    // Otros componentes pueden ir aquí
  ]
})
export class ComponentsModule {}
