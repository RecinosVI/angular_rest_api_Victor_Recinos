import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ComingSoon } from './pages/coming-soon/coming-soon';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Inicio | Universo API' },
  { path: 'digimon', component: ComingSoon, data: { title: 'Digimon' } },
  { path: 'dragon-ball', component: ComingSoon, data: { title: 'Dragon Ball Z' } },
  { path: 'pokemon', component: ComingSoon, data: { title: 'Pokémon' } },
  { path: 'demon-slayer', component: ComingSoon, data: { title: 'Demon Slayer' } },
  { path: '**', redirectTo: '' }
];
