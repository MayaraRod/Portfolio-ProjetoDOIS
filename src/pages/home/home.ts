import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ListaPrevisaoPage } from '../lista-previsao/lista-previsao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  entrar() {

    this.navCtrl.setRoot(ListaPrevisaoPage);

  
 }

  ionViewDidLeave() {
    console.log("did leave")
  }

  ionViewWillLeave() {
    console.log("will leave")
  }

  ionViewWillUnload() {
    console.log("will unload")
  }

  ionViewCanLeave() {
    console.log("can leave")
  }


}
