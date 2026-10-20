import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail as PokemonModel } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css'
})
export class PokemonDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(PokemonService);
  pokemon?: PokemonModel;
  loading = true;
  error = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(id) || id <= 0) { this.loading = false; this.error = true; return; }
    this.service.getById(id).subscribe({
      next: data => { this.pokemon = data; this.loading = false; },
      error: () => { this.loading = false; this.error = true; }
    });
  }

  imageOf(item: PokemonModel): string {
    return item.sprites.other?.['official-artwork']?.front_default
      || item.sprites.front_default
      || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`;
  }
}
