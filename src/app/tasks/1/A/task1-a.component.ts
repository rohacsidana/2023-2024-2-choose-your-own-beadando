import { Component } from '@angular/core';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task1-a',
  templateUrl: './task1-a.component.html',
  styleUrls: ['./task1-a.component.less'],
})
export class Task1AComponent {
  rgbMin: number = 0;
  rgbMax: number = 255;

  redValue: number = 0;
  greenValue: number = 0;
  blueValue: number = 0;
  alphaValue: number = 0.5;

  get backgroundColor(): string {
    return `rgba(${this.redValue}, ${this.greenValue}, ${this.blueValue}, ${this.alphaValue})`;
  }

  constructor() {}
}
