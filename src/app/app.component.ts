import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private db: AngularFirestore){

  }

  go(){
    console.log("go");
    this.db.collection('items').add({date: new Date});
  }
}
