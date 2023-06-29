import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Edson Mendes';
  hobbies: string[] = ['Cozinhar', 'Malhar', 'Ler manga'];

  car = {
    model: 'Gallardo',
    brand: 'Lamborghini',
  };
}
