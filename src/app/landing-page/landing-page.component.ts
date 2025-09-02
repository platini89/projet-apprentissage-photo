import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [ ReactiveFormsModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

constructor(private router: Router) { }

onContinue() {
    this.router.navigateByUrl('facesnaps');
}

}
