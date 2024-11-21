import { Injectable } from '@angular/core';
import { NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  carBrands: string[] = ['Audi', 'Opel', 'Peugeot', 'Volkswagen', 'Fiat'];


  generateCarTree(modelCount: number) {
    const brand =
      this.carBrands[Math.floor(Math.random() * this.carBrands.length)];

    let models = [];
    for (let i = 0; i < modelCount; i++) {
      models.push({
        title: generateModelName(),
        key: generateModelName(),
        isLeaf: true,
      });
    }

    const tree = {
      title: brand,
      key: brand,
      children: models,
    };
    return tree;
  }

  constructor() {}
}
function generateModelName() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
