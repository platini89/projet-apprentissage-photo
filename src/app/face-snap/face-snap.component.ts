import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle, TitleCasePipe,  } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [ NgStyle ,NgClass,TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent  implements OnInit {

// injection du services
  constructor(private faceSnapsService: FaceSnapsService) {}

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
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}

snap() {
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  this.snapButtonText = 'Oops, unSnap!';
  this.userHasSnapped = true;
}

}
