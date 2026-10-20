import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DigimonService } from '../../services/digimon.service';
import { Digimon } from '../../interfaces/digimon';
import { ImageDialog } from '../../components/image-dialog/image-dialog';

@Component({
  selector: 'app-digimon-list',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule],
  templateUrl: './digimon-list.html',
  styleUrl: './digimon-list.css'
})
export class DigimonList implements OnInit {
  private service = inject(DigimonService);
  private dialog = inject(MatDialog);
  digimons: Digimon[] = [];
  loading = true;
  error = false;
  pageIndex = 0;
  pageSize = 12;

  get visibleDigimons(): Digimon[] {
    const start = this.pageIndex * this.pageSize;
    return this.digimons.slice(start, start + this.pageSize);
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error = false;
    this.service.getAll().subscribe({
      next: (data) => { this.digimons = data; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  changePage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  showImage(digimon: Digimon): void {
    this.dialog.open(ImageDialog, { data: digimon, width: '450px', maxWidth: '95vw' });
  }
}
