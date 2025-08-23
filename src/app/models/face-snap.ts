import { SnapType } from './snap-type.type';

export class FaceSnap {

//ajout optionnel de la localisation
     location?: string;
  id: string;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

              //methode pour snap et onsnap
  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

// methode gerant le snap et unsnap
  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
}


  //methode gerant la localisation
  setLocation(location: string): void {
    this.location = location;
  }

  // methode pour retourner l'instance avec la localisation

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}



/*
//model for FaceSnap component

export class FaceSnap {
  title: string;
  description: string;
  createdDate: Date;
  snaps: number;
  imageUrl: string;

  constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.snaps = snaps;
  }
}*/
