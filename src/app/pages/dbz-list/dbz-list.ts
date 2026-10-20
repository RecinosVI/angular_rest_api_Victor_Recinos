import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DbzService } from '../../services/dbz.service';
import { DbzCharacter } from '../../interfaces/dbz-character';
import { ImageDialog } from '../../components/image-dialog/image-dialog';

@Component({
  selector: 'app-dbz-list',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule],
  templateUrl: './dbz-list.html',
  styleUrl: './dbz-list.css'
})
export class DbzList implements OnInit {
  private service = inject(DbzService);
  private dialog = inject(MatDialog);
  characters: DbzCharacter[] = [];
  total = 0;
  pageIndex = 0;
  pageSize = 12;
  loading = true;
  error = false;

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error = false;
    this.service.getPage(this.pageIndex + 1, this.pageSize).subscribe({
      next: response => {
        this.characters = response.items;
        this.total = response.meta.totalItems;
        this.loading = false;
      },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  changePage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }

  showImage(character: DbzCharacter): void {
    this.dialog.open(ImageDialog, {
      data: { name: character.name, img: character.image },
      width: '460px', maxWidth: '95vw'
    });
  }
}
