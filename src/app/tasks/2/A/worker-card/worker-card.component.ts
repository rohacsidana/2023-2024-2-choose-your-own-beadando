import { Component, Input } from '@angular/core';
import { WorkerPerson, authLevel } from '../task2-a.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrl: './worker-card.component.less',
})
export class WorkerCardComponent {
  @Input({ required: true }) worker: WorkerPerson = new WorkerPerson(
    'worker',
    authLevel.ADMIN,
    0
  );
  @Input() emphasize: boolean = false;

  @Output() changeWorkersMistake = new EventEmitter<number>();

  changeClick() {
    this.changeWorkersMistake.emit(this.worker.mistakes - 1);
  }

  authString(auth: authLevel): string {
    let str: string = '';
    switch (auth) {
      case authLevel.READER:
        str = 'olvashat';
        break;
      case authLevel.WRITER:
        str = 'írhat';
        break;
      case authLevel.ADMIN:
        str = 'admin';
        break;
      default:
        break;
    }
    return str;
  }

  isBadWorker(): boolean {
    return this.worker.mistakes > 10;
  }
}
