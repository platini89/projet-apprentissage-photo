export class FaceSnap {

//ajout optionnel de la localisation
    location?: string;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}

              //methode pour snap et onsnap
  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }


  //methode gerant la localisation
  setLocation(location: string): void {
    this.location = location;
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
