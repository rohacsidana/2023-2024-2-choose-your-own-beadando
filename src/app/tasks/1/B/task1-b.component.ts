import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-b',
  templateUrl: './task1-b.component.html',
  styleUrls: ['./task1-b.component.less'],
})
export class Task1BComponent {
  items = [
    { name: 'I.', color: '#ffcccc' },
    { name: 'II.', color: '#ccffcc' },
    { name: 'III.', color: '#ccccff' },
    { name: 'IV.', color: '#ffffcc' },
  ];

  constructor() {}
}
