import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from "@angular/material/legacy-dialog";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.less']
})
export class PreviewComponent {
  constructor(public dialogRef: MatDialogRef<PreviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string; text: string; }) {
  }

}
