import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonEntry } from '../../interfaces/pokemon';
import { ImageDialog } from '../../components/image-dialog/image-dialog';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList implements OnInit {
  private service = inject(PokemonService);
  private dialog = inject(MatDialog);
  pokemon: PokemonEntry[] = [];
  total = 0;
  pageIndex = 0;
  pageSize = 12;
  loading = true;
  error = false;

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error = false;
    this.service.getPage(this.pageIndex, this.pageSize).subscribe({
      next: data => { this.pokemon = data.results; this.total = data.count; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  idOf(item: PokemonEntry): number {
    return Number(item.url.match(/\/pokemon\/(\d+)\/?$/)?.[1] ?? 0);
  }

  imageOf(item: PokemonEntry): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.idOf(item)}.png`;
  }

  changePage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }

  showImage(item: PokemonEntry): void {
    this.dialog.open(ImageDialog, {
      data: { name: item.name, img: this.imageOf(item) },
      width: '460px', maxWidth: '95vw'
    });
  }
}
