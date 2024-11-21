import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-task5-a',
  templateUrl: './task5-a.component.html',
  styleUrls: ['./task5-a.component.less'],
})
export class Task5AComponent implements OnInit {
  carTree: NzTreeNodeOptions[] = [];
  selectedNodeTitle = '';

  constructor(private generatorService: GeneratorService) {}

  ngOnInit() {
    this.carTree.push(this.generatorService.generateCarTree(20));
  }

  onModelClick(event: any) {
    this.selectedNodeTitle = event.node.title;
  }
}
