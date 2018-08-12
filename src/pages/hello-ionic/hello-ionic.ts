import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import {LocationPage} from "../location/location";
import {LocationtrackerProvider} from "../../providers/locationtracker/locationtracker";
import {ServerProvider} from "../../providers/server/server";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl : NavController , public locationTracker : LocationtrackerProvider , private db : ServerProvider) {
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
  onaddname(value : {title:string}){
    this.db.save();
  }
}
