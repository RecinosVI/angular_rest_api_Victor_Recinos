import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  sections = [
    { name: 'Digimon', route: '/digimon', image: 'https://digimon-api.vercel.app/images/agumon.jpg', description: 'Explora los Digimon y descubre sus nombres, imágenes y características.' },
    { name: 'Dragon Ball Z', route: '/dragon-ball', image: 'https://dragonball-api.com/characters/goku_normal.webp', description: 'Conoce a los personajes del universo de Dragon Ball y sus historias.' },
    { name: 'Pokémon', route: '/pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', description: 'Descubre Pokémon, sus tipos y la información de cada especie.' },
    { name: 'Demon Slayer', route: '/demon-slayer', image: 'https://www.demonslayer-api.com/api/v1/characters/images/1.webp', description: 'Conoce a los cazadores de demonios y otros personajes de la serie.' }
  ];
}
