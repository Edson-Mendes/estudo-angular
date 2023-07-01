import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'Kira', type: 'Cat' },
    { name: 'Mei', type: 'Cat' },
    { name: 'Feijão', type: 'Cat' },
    { name: 'Sofi', type: 'Dog' },
    { name: 'Mila', type: 'Cat' },
    { name: 'Luna', type: 'Cat' },
    { name: 'Princesa', type: 'Horse' },
  ];
}
