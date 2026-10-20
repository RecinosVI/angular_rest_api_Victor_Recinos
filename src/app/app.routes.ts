import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ComingSoon } from './pages/coming-soon/coming-soon';
import { DigimonList } from './pages/digimon-list/digimon-list';
import { DigimonDetail } from './pages/digimon-detail/digimon-detail';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Inicio | Universo API' },
  { path: 'digimon', component: DigimonList, title: 'Digimon | Universo API' },
  { path: 'digimon/:name', component: DigimonDetail, title: 'Detalle Digimon | Universo API' },
  { path: 'dragon-ball', component: ComingSoon, data: { title: 'Dragon Ball Z' } },
  { path: 'pokemon', component: ComingSoon, data: { title: 'Pokémon' } },
  { path: 'demon-slayer', component: ComingSoon, data: { title: 'Demon Slayer' } },
  { path: '**', redirectTo: '' }
];
