import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl: string = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

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

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
