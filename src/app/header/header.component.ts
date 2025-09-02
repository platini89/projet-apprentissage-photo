import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {

constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddNewFaceSnap() {
    this.router.navigateByUrl('/create');
  }

}
