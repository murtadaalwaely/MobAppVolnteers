import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../app/AppService.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the HumStateRepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hum-state-rep',
  templateUrl: 'hum-state-rep.html',
})
export class HumStateRepPage {
  resp:any;
  name:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public XService:AppService,public http:Http ,private httpClient:HttpClient) {
  }

  callPostData(Fname,Loc,Dir,Det)
  {
      let p=this.XService.postNeeders(Fname,Loc,Dir,Det);
      p.then(data => {
        console.log("Received");
        this.resp=JSON.stringify(data.JSON().data);
        
      });
  }
  onNameKeyUp(event: any){
    this.name=event.target.value;
}
getProfile(){
    console.log(this.name);
    let url:any;
    var javascriptCallout=this.httpClient.get('https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles')
    .subscribe(
        (data:any[]) => {
            console.log(data);
        }
    );
}
// postProfile(xType,xLoc){
//   console.log(this.name);
//   let url:any;
//   this.httpClient.post('../assets/json/data.json',{
//     location: xLoc,
//     type:xType
//   })
//   .subscribe(
//       (data:any) => {
//           console.log(data);
//       }
//   );
// }


}
