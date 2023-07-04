import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  remove(animals: Animal[], animal: Animal) {
    console.log(`Removendo animal: ${animal.name} at ListService`);
    let index: number = animals.indexOf(animal);

    if (index !== -1) {
      animals.splice(index, 1);
    }
  }

  register(animals: Animal[], newAnimal: Animal): void {
    animals.push(newAnimal);
    console.log(`Animal ${newAnimal.name} registered successful`);
  }
}
