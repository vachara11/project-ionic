import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatadetailPage } from './datadetail.page';

const routes: Routes = [
  {
    path: '',
    component: DatadetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatadetailPageRoutingModule {}
