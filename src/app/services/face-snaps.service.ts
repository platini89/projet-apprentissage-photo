// services/face-snaps.service.ts
import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {

  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10,
      'snap-1' // ← id FIXE
    ),
    new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6,
      'snap-2' // ← id FIXE
    ),
    new FaceSnap(
      'Un bon repas',
      'Mmmh que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      156,
      'snap-3' // ← id FIXE
    ).withLocation('à la montagne'),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const found = this.faceSnaps.find(fs => fs.id === faceSnapId);
    if (!found) throw new Error('FaceSnap not found!');
    return found;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const fs = this.getFaceSnapById(faceSnapId);
    fs.snap(snapType);
  }


// New method to add a FaceSnap
// Nouvelle méthode pour ajouter un FaceSnap
  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
  const newFaceSnap = new FaceSnap(
    formValue.title,
    formValue.description,
    formValue.imageUrl,
    new Date(),
    0,
    crypto.randomUUID().substring(0, 8) // id unique
  );

  if (formValue.location) {
    newFaceSnap.setLocation(formValue.location);
  }

  this.faceSnaps.push(newFaceSnap);
}

}
