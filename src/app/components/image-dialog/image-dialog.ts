import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-dialog',
  imports: [MatDialogModule, MatButtonModule],
  template: `<h2 mat-dialog-title>{{ data.name }}</h2>
    <mat-dialog-content><img [src]="data.img" [alt]="data.name" class="large-image"></mat-dialog-content>
    <mat-dialog-actions align="end"><button mat-button mat-dialog-close>Cerrar</button></mat-dialog-actions>`,
  styles: [`.large-image { display: block; max-width: 100%; max-height: 65vh; width: auto; height: auto; object-fit: contain; margin: auto; }`]
})
export class ImageDialog {
  data = inject<{ name: string; img: string }>(MAT_DIALOG_DATA);
}
