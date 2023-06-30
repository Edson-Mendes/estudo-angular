import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent {
  canShow: boolean = true;
  name: string = 'Edson';

  switch() {
    if (this.canShow) {
      this.name = 'Kira';
    } else {
      this.name = 'Edson';
    }
    this.canShow = !this.canShow;
  }
}
