import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
  </nav>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'GaJeMee?!';

  clickLogin() {
    alert("The ontoggle event occured");
  }

}
