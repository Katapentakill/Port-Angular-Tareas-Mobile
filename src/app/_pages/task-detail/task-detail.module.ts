import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TaskDetailComponent } from './task-detail.component';
import { TaskDetailRoutingModule } from './task-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskDetailRoutingModule
  ],
  declarations: [TaskDetailComponent]
})
export class TaskDetailModule {}
