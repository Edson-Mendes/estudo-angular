import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'estudo-angular';

  username: string = 'Edson Mendes';

  userData = {
    email: 'lorem@email.com',
    name: 'Lorem Ipsum',
  };
}
