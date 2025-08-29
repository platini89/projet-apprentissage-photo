// single-face-snap.component.ts
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { NgClass, NgStyle, UpperCasePipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, RouterLink, UpperCasePipe, DatePipe],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css'] // ← pluriel
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap?: FaceSnap;
  snapButtonText = 'Oh Snap!';
  userHasSnapped = false;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}


  // method called once the component is initialized
  // to retrieve the FaceSnap object corresponding to the id in the URL
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // string
    try {
      this.faceSnap = this.faceSnapsService.getFaceSnapById(id);
    } catch {
      console.error('FaceSnap not found for id', id);
      this.faceSnap = undefined;
    }
  }

  onSnap(): void {
    if (!this.faceSnap) return;

    if (this.userHasSnapped)
       {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
    }
  }
}
