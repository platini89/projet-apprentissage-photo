import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent  implements OnInit {

  // Properties for the FaceSnap component
  // Definition des propriétés du composant FaceSnap avec promesse
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;


  //initalization of the component
  // Initialisation de donnees des proprietess du composant
  ngOnInit(): void {
    this.title = 'My First FaceSnap';
    this.description = 'This is a description of my first FaceSnap.';
    this.createdAt = new Date();
    this.snaps = 0;
  }

}
