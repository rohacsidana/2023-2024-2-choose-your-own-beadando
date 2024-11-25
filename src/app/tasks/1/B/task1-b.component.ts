import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-b',
  templateUrl: './task1-b.component.html',
  styleUrls: ['./task1-b.component.less'],
})
export class Task1BComponent {
  items: Item[] = [
    {
      name: 'I.',
      color: '#ffcccc',
      size: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
      },
    },
    {
      name: 'II.',
      color: '#ccffcc',
      size: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
      },
    },
    {
      name: 'III.',
      color: '#ccccff',
      size: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
      },
    },
    {
      name: 'IV.',
      color: '#ffffcc',
      size: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 16,
      },
    },
  ];

  getItemWidth(item: Item) {
    const width = window.innerWidth;
    if (width < 576) {
      return item.size.xs;
    } else if (width >= 576 && width < 768) {
      return item.size.sm;
    } else if (width >= 768 && width < 992) {
      return item.size.md;
    } else {
      return item.size.lg;
    }
  }

  decreaseWidth(item: Item) {
    const currentWidth = this.getItemWidth(item);
    const width = this.getWindowSize();
    if (currentWidth > 1) {
      item.size[width] = currentWidth - 1;
    }
  }

  increaseSize(item: Item) {
    const currentWidth = this.getItemWidth(item);
    const widthKey = this.getWindowSize();
    if (currentWidth < 24) {
      item.size[widthKey] = currentWidth + 1;
    }
  }

  getWindowSize() {
    const width = window.innerWidth;
    if (width < 576) {
      return 'xs';
    } else if (width >= 576 && width < 768) {
      return 'sm';
    } else if (width >= 768 && width < 992) {
      return 'md';
    } else {
      return 'lg';
    }
  }

  constructor() {}
}

export interface Item {
  name: string;
  color: string;
  size: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
}
