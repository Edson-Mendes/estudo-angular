import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.listService = listService;
  }

  newAnimal: Animal = { name: '', type: '', age: 0 };

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

  removeAnimal(animal: Animal) {
    this.listService.remove(this.animals, animal);
  }

  registrar() {
    this.listService.register(this.animals, this.newAnimal);
    this.reset();
  }

  private reset(): void {
    this.newAnimal = { name: '', type: '', age: 0 };
  }
}
