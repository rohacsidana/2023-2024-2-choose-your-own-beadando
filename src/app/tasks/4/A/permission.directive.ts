import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnChanges {
  @Input() appPermission!: string;
  @Input() userPermissions: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (
      this.appPermission === 'Írási jog' &&
      !this.userPermissions.includes(this.appPermission)
    ) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'yellow'
      );
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }

    if (
      this.appPermission === 'Adminisztrátori jog' &&
      !this.userPermissions.includes(this.appPermission)
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }
}
