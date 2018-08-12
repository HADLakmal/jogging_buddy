import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import {LocationPage} from "../location/location";
import {LocationtrackerProvider} from "../../providers/locationtracker/locationtracker";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl : NavController , public locationTracker : LocationtrackerProvider) {
  }
  onLoadTracker(){
    this.navCtrl.push(LocationPage);
  }
  start(){
    this.locationTracker.startTracking();
  }
  stop(){
    this.locationTracker.stopTracking();
  }
}
