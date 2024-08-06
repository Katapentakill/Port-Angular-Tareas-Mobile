import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusPage } from './status.page';

const routes: Routes = [
  {
    path: '',
    component: StatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {}
