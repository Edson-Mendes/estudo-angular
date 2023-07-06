import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent {
  animals: Animal[] = [];
  animalDetails: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
    this.listService = listService;
  }

  private getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  removeAnimal(animal: Animal) {
    throw new Error('Method not implemented.');
  }

  showAge(animal: Animal) {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`;
  }
}
