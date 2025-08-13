import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent  implements OnInit {

  // Importing the FaceSnap model
  @Input() faceSnap!: FaceSnap;

  // Properties for the FaceSnap component
  // Definition des propriétés du composant FaceSnap avec promesse
  snapButtonText!: string;
  userHasSnapped!: boolean;


  //initalization of the component
  // Initialisation de donnees des proprietess du composant
  ngOnInit(): void {

    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}

}
