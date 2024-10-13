import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatadetailPageRoutingModule } from './datadetail-routing.module';

import { DatadetailPage } from './datadetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatadetailPageRoutingModule
  ],
  declarations: [DatadetailPage]
})
export class DatadetailPageModule {}
