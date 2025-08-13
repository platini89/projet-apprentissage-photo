import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //declaration des donnees
   mySnap!: FaceSnap;
   myscodesnap! : FaceSnap;
   mysdesnap! : FaceSnap;

   ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'My First FaceSnap',
      'This is a description of my first FaceSnap.',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.myscodesnap = new FaceSnap (
      'My First FaceSnap',
      'This is a description of my first FaceSnap.',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      5
    );

    this. mysdesnap = new FaceSnap (
      'My First FaceSnap',
      'This is a description of my first FaceSnap.',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      5
    );
   }

}
