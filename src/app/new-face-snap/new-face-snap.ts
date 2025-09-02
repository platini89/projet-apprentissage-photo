import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { map } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-new-face-snap',
  imports: [ ReactiveFormsModule,UpperCasePipe,DatePipe,CommonModule ],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.css'
})
export class NewFaceSnap  implements OnInit {

  // Inject FormBuilder service
  constructor(private formBuilder: FormBuilder) { }

   snapForm!: FormGroup;// FormGroup instance to manage the form,ariable qui contiendra l'objet du formulaire

   // Observable to hold the FaceSnap preview in real-time in the template
   // observable qui contiendra l'aperçu du FaceSnap en temps réel dans le template
   faceSnapPreview$!: Observable<FaceSnap>;

  ngOnInit(): void {

      // Define form controls here
      this.snapForm = this.formBuilder.group({
        title: [''],
        description: [''],
        imageUrl: [''],
        location: ['']

    });


    // Initialize faceSnapPreview$ observable here
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
    }))
);
  }

  // Method to handle form submission
  onSubmitForm() {
    console.log(this.snapForm.value);
}


}
