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

  deleteAnimal(id: number) {
    console.log('deleting animal...');
    this.listService.removeById(id).subscribe();
    let index: number = this.animals.findIndex((animal) => animal.id === id);

    if (index !== -1) {
      this.animals.splice(index, 1);
    }
  }

  showAge(animal: Animal) {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`;
  }
}
