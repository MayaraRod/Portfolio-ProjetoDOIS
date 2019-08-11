import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPrevisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-previsao',
  templateUrl: 'lista-previsao.html',
})
export class ListaPrevisaoPage {
  private texto: string = "Previsão do Tempo";

  private climas = [
    {
      dia: 'Segunda',
      clima: 'Chuva',
      icone: 'rainy',
      tempMax: 27,
      tempMin: 23
    },
    {
      dia: 'Terça',
      clima: 'Ensolarado',
      icone: 'sunny',
      tempMax: 32,
      tempMin: 29
    },
    {
      dia: 'Quarta',
      clima: 'Nublado',
      icone: 'cloudy',
      tempMax: 27,
      tempMin: 26
    },
    {
      dia: 'Quinta',
      clima: 'Ensolarado',
      icone: 'sunny',
      tempMax: 33,
      tempMin: 26
    },
    {
      dia: 'Sexta',
      clima: 'Chuva',
      icone: 'rainy',
      tempMax: 28,
      tempMin: 23
    },
    {
      dia: 'Sábado',
      clima: 'Chuva',
      icone: 'rainy',
      tempMax: 27,
      tempMin: 22
    },
    {
      dia: 'Domingo',
      clima: 'Nublado',
      icone: 'cloudy',
      tempMax: 28,
      tempMin: 26
    },

  ];
  
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPrevisaoPage');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter ListaPrevisaoPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ListaPrevisaoPage');
  } 

  ionViewWillLeave() {
    console.log('ionViewWillLeave ListaPrevisaoPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave ListaPrevisaoPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnLoad ListaPrevisaoPage');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter ListaPrevisaoPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave ListaPrevisaoPage');
  } 

}
