import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail.component';

const routes: Routes = [
  { path: '', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskDetailRoutingModule {}
