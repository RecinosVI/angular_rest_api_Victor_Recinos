import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink, MatButtonModule],
  template: `<section class="pending"><h1>{{ title() }}</h1><p>La lista de personajes se implementará en el siguiente commit correspondiente a esta API.</p><a mat-flat-button routerLink="/">Volver al inicio</a></section>`,
  styles: [`.pending { max-width: 800px; padding: 80px 24px; margin: auto; text-align: center; } .pending p { color: #586276; margin-bottom: 24px; }`]
})
export class ComingSoon { title = input.required<string>(); }
