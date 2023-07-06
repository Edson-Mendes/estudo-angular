import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  animal: Animal = { id: 0, name: '', type: '', age: 0 };

  registrar() {
    console.log(`animal: ${this.animal.name} registrado com sucesso!`);
    this.animal = { id: 0, name: '', type: '', age: 0 };
  }
}
