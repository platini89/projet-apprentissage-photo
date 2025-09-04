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
import { Validators } from '@angular/forms';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-new-face-snap',
  imports: [ ReactiveFormsModule,UpperCasePipe,DatePipe,CommonModule ],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.css'
})
export class NewFaceSnap  implements OnInit {

  // Inject FormBuilder service
  constructor(private formBuilder: FormBuilder,
              private faceSnapsService: FaceSnapsService,
              private router: Router  ) {

  }

   snapForm!: FormGroup;// FormGroup instance to manage the form,ariable qui contiendra l'objet du formulaire

   // Observable to hold the FaceSnap preview in real-time in the template
   // observable qui contiendra l'aperçu du FaceSnap en temps réel dans le template
   faceSnapPreview$!: Observable<FaceSnap>;

  // regex validator pour verifier la validiter d'un champ img
   urlRegex!: RegExp;

  ngOnInit(): void {

    // regex montrant la syntaxe d'un champ img
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

      // Define form controls here
     this.snapForm = this.formBuilder.group({
    title: [null, [Validators.required]],
    description: [null, [Validators.required]],
    imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
    location: [null]
}, {
    updateOn: 'blur'
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
   this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');

}

}
