import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { GenerosPage } from '../pages/generos/generos';
import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecomendadasPage } from '../pages/recomendadas/recomendadas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    GenerosPage,
    RecomendadasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: HomePage, name: 'Home', segment: 'home'},
        {component: LoginPage, name: 'Login', segment: 'login'},
        {component: RecomendadasPage, name: 'Recomendadas', segment: 'recomendadas'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    GenerosPage,
    RecomendadasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
