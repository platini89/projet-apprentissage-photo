import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
 import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {

//...constructeur pour injecter le service
  // Importing the FaceSnapsService to get the list of FaceSnaps

constructor(private faceSnapsService: FaceSnapsService) { }

// Property to hold the list of FaceSnaps
// Propriété pour stocker la liste des FaceSnaps
  faceSnaps!: FaceSnap[];


  // Method to initialize the component
  // Methode pour initialiser le composant
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  
}


}
