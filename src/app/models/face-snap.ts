// models/face-snap.ts
import { SnapType } from './snap-type.type';

export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number,
    id?: string               // ← NOUVEAU: id optionnel
  ) {
    this.id = id ?? crypto.randomUUID().substring(0, 8);
  }

  addSnap() { this.snaps++; }

  removeSnap() { this.snaps--; }

  snap(type: SnapType)
   { type === 'snap' ? this.addSnap() : this.removeSnap();
    
   }

  setLocation(loc: string) { this.location = loc; }
  withLocation(loc: string) { this.setLocation(loc); return this; }
}
