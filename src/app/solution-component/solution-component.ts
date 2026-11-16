import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-solution-component',
  styleUrl: './solution-component.css',
  templateUrl: './solution-component.html',
})
export class SolutionComponent {

  name!: string;


  mehet() {
    console.log(this.name)
  }
}
