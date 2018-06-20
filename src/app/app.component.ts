import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rocksmith personal best global DB';
  /**
   *
   */
  constructor(public afAuth: AngularFireAuth) { }


  // login to twich and redirect back to our app
  login() {
    // tslint:disable-next-line:max-line-length
    window.location.replace(`https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=iacv84dp3nbpyi9f09crymqjujesvf&redirect_uri=http://localhost:4200/login&scope=openid`);
  }

}
