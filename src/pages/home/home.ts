import { LoginPage } from './../login/login';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage = LoginPage;
  constructor(public navCtrl: NavController) {
    
  }

}
