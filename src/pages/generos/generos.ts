import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GenerosProvider } from '../../providers/generos';

@Component({
  selector: 'page-generos',
  templateUrl: 'generos.html',
  providers:[GenerosProvider]
})
export class GenerosPage {

  generos =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public generoProvider:GenerosProvider) {}

  ionViewDidLoad() {
    this.generoProvider.getGeneros().then(res => {
      this.generos = res;
    });
  }

  registrarGeneros(){
    let selecionados = this.generos.filter((genero) => genero.selecionado);
    console.log("generos escolhidos",selecionados);
  }

}
