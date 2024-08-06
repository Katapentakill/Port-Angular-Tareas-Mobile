import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/_pages/auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'status', loadChildren: () => import('./_pages/status/status.module').then(m => m.StatusPageModule) },
  { path: 'task/:id', loadChildren: () => import('./_pages/task-detail/task-detail.module').then(m => m.TaskDetailModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
