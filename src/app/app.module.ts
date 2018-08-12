import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import {LocationPage} from "../pages/location/location";
import { LocationtrackerProvider } from '../providers/locationtracker/locationtracker';
import { ServerProvider } from '../providers/server/server';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

var config = {
  apiKey: "AIzaSyAp5-xMWUpLRTVZU8jiweMkBPCRuTzZLko",
  authDomain: "jogging-46c08.firebaseapp.com",
  databaseURL: "https://jogging-46c08.firebaseio.com",
  projectId: "jogging-46c08",
  storageBucket: "jogging-46c08.appspot.com",
  messagingSenderId: "189425901702"
};


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationtrackerProvider,
    ServerProvider
  ]
})
export class AppModule {}
