import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnima();
  }

  getAnima(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService
      .getAnimalById(id)
      .subscribe((animal) => (this.animal = animal));
  }
}
