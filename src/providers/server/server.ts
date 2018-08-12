import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {
    arrydata = [];
  constructor(private fbd : AngularFireDatabase) {
      this.fbd.list('/items/').subscribe(_data =>{
          this.arrydata = _data;

          console.log(this.arrydata);
      });

  }

  save() {
      this.fbd.list("/items/").push("name");
  }
}
