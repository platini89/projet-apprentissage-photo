import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { interval ,Observable,} from 'rxjs';
import { AsyncPipe, } from '@angular/common';
import { map,filter,tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  interval$!: Observable<string>;

  ngOnInit() {
    setTimeout(() => {
     this.interval$ = interval(1000).pipe(
      //filter to get only multiples of 3
      // filtrer les multiples de 3
          filter(value => value % 3 === 0),

          // map to return a string indicating if the number is even or odd
          // mapper pour retourner une chaîne indiquant si le nombre est pair ou impair
        map(value => value % 2 === 0 ?
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
    ),

    // tap to log the emitted text
    // Tap pour enregistrer le texte émis
      tap(text => this.logger(text))

)  } , 2000);
  }


// simple logger function
  logger(text: string): void {
    console.log(`Log: ${text}`);
}
}
