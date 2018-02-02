import { Component ,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ReflectiveInjector } from '@angular/core/src/di/reflective_injector';
import { AppService } from '../../app/AppService.service';
// import { RedditDataProvider } from '../../prov?iders/reddit-data/red?dit-data';
// import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public images:any=[];
  public Needers: any=[];
  constructor(public navCtrl: NavController, public http:Http,public dataService:AppService) {
    this.dataService.getNeeders().subscribe(needers => {
      console.log(needers);
      this.Needers=needers;
    //  *ngforEach(array_of_objects, function(item, index) {
    //     console.log(item, index);
      this.images=this.Needers.image;
    });
  }

}

