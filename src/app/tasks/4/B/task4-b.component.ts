import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-task4-b',
  templateUrl: './task4-b.component.html',
  styleUrls: ['./task4-b.component.less'],
})
export class Task4BComponent {
  imageChangedEvent: Event | null = null;
  croppedImage: string = '';
  modalIsVisible = false;

  constructor() {}

  ngOnInit() {
    this.retrieveImage();
  }

  showModal() {
    this.modalIsVisible = true;
  }

  exitModal() {
    this.modalIsVisible = false;
    this.retrieveImage();
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64 ?? event.objectUrl ?? '';
  }

  saveImage() {
    if (this.croppedImage) {
      localStorage.setItem('croppedImg', this.croppedImage);
    }
  }

  retrieveImage() {
    const savedImage = localStorage.getItem('croppedImg');
    if (savedImage) {
      this.croppedImage = savedImage;
    }
  }
}
