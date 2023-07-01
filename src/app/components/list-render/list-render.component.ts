import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Kira', type: 'Cat', age: 6 },
    { name: 'Mei', type: 'Cat', age: 6 },
    { name: 'Feijão', type: 'Cat', age: 8 },
    { name: 'Sofi', type: 'Dog', age: 12 },
    { name: 'Mila', type: 'Cat', age: 9 },
    { name: 'Luna', type: 'Cat', age: 9 },
    { name: 'Princesa', type: 'Horse', age: 4 },
  ];

  animalDetails: string = '';

  showAge(animal: Animal) {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`;
  }
}
