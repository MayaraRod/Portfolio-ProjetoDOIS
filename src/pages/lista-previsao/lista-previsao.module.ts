import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPrevisaoPage } from './lista-previsao';

@NgModule({
  declarations: [
    ListaPrevisaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPrevisaoPage),
  ],
})
export class ListaPrevisaoPageModule {}
