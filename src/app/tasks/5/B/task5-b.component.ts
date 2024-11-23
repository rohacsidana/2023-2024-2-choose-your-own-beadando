import { Component, OnInit } from '@angular/core';
import { Car, Generator2Service } from './generator2.service';

@Component({
  selector: 'app-task5-b',
  templateUrl: './task5-b.component.html',
  styleUrls: ['./task5-b.component.less'],
})
export class Task5BComponent implements OnInit {
  cars: Car[] = [];

  constructor(private generator: Generator2Service) {}

  ngOnInit() {
    this.cars = this.generator.generateCars(1000);
  }
}
