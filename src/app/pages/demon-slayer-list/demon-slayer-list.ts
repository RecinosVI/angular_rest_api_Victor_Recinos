
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DemonSlayerService } from '../../services/demon-slayer.service';
import { DemonSlayerCharacter } from '../../interfaces/demon-slayer-character';
import { ImageDialog } from '../../components/image-dialog/image-dialog';

@Component({
  selector: 'app-demon-slayer-list',
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './demon-slayer-list.html',
  styleUrl: './demon-slayer-list.css'
})
export class DemonSlayerList implements OnInit {
  private service = inject(DemonSlayerService);
  private dialog = inject(MatDialog);

  characters: DemonSlayerCharacter[] = [];
  pageIndex = 0;
  pageSize = 5;
  totalCharacters = 0;
  loading = true;
  error = false;

  get visibleCharacters(): DemonSlayerCharacter[] {
    return this.characters;
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = false;

    this.service.getAll(this.pageIndex + 1).subscribe({
      next: response => {
        this.characters = response.content;
        this.totalCharacters = response.pagination.totalElements;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  changePage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.load();
  }

  showImage(character: DemonSlayerCharacter): void {
    this.dialog.open(ImageDialog, {
      data: {
        name: character.name,
        img: character.img
      },
      width: '460px',
      maxWidth: '95vw'
    });
  }
}
