import { Component } from '@angular/core';

@Component({
  selector: 'app-task2-a',
  templateUrl: './task2-a.component.html',
  styleUrls: ['./task2-a.component.less'],
})
export class Task2AComponent {
  emphasize: boolean = false;
  workers: WorkerPerson[] = [
    new WorkerPerson('Jani', authLevel.READER, 4),
    new WorkerPerson('Gabi', authLevel.ADMIN, 0),
    new WorkerPerson('Balu', authLevel.WRITER, 12),
    new WorkerPerson('Andi', authLevel.ADMIN, 1),
  ];

  constructor() {}
}

export enum authLevel {
  READER,
  WRITER,
  ADMIN,
}

export class WorkerPerson {
  name: string;
  auth: authLevel;
  mistakes: number;
  constructor(name: string, auth: authLevel, mistakes: number) {
    this.name = name;
    this.auth = auth;
    this.mistakes = mistakes;
  }
}
