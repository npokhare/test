import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';


var firebaseConfig = {
  apiKey: "AIzaSyAg-xZ62pB7Ab8Wb8K368DQPB5XYgJczXE",
  authDomain: "hello-world-3bf0d.firebaseapp.com",
  projectId: "hello-world-3bf0d",
  storageBucket: "hello-world-3bf0d.appspot.com",
  messagingSenderId: "199457464687",
  appId: "1:199457464687:web:f2878974a35243ea8e089a",
  measurementId: "G-7PWZDQNHRG"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule // firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
