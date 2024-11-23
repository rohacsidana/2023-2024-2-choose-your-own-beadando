import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Generator2Service {
  carBrands: string[] = ['Audi', 'Opel', 'Peugeot', 'Volkswagen', 'Fiat'];
  constructor() {}

  generateCars(count: number) {
    let cars = [];
    for (let i = 0; i < count; i++) {
      cars.push({
        manufacturer:
          this.carBrands[Math.floor(Math.random() * this.carBrands.length)],
        year: this.generateYear(),
        plate: this.generatePlate(),
      });
    }
    return cars;
  }

  generatePlate(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    for (let i = 0; i < 3; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return result;
  }

  generateYear(): number {
    return Math.floor(Math.random() * (2024 - 1950 + 1)) + 1950;
  }
}

export interface Car {
  manufacturer: string;
  year: number;
  plate: string;
}
