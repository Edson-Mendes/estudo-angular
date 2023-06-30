import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  show: boolean = true;
  label: string = 'Ocultar';

  showMessage(): void {
    if (this.show) {
      this.label = 'Mostrar';
    } else {
      this.label = 'Ocultar';
    }
    this.show = !this.show;
  }
}
