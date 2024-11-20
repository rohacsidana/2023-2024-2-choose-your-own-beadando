import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

@Pipe({
  name: 'encrypt',
  standalone: true,
  pure: true,
})
export class EncryptPipe implements PipeTransform {
  transform(value: string): string {
    if (/^\d{8}-\d{8}$/.test(value)) {
      return '*' + value.substring(value.length - 4);
    } else if (/^\d{2}-\d{2}-\d{3}-\d{4}$/.test(value)) {
      const firstPart = value
        .substring(0, value.length - 2)
        .replace(/\d/g, '*');
      return firstPart + value.substring(value.length - 2);
    }

    return value.replace(/./g, '*');
  }
}
