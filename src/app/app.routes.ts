import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ComingSoon } from './pages/coming-soon/coming-soon';
import { DigimonList } from './pages/digimon-list/digimon-list';
import { DigimonDetail } from './pages/digimon-detail/digimon-detail';
import { DbzList } from './pages/dbz-list/dbz-list';
import { DbzDetail } from './pages/dbz-detail/dbz-detail';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Inicio | Universo API' },
  { path: 'digimon', component: DigimonList, title: 'Digimon | Universo API' },
  { path: 'digimon/:name', component: DigimonDetail, title: 'Detalle Digimon | Universo API' },
  { path: 'dragon-ball', component: DbzList, title: 'Dragon Ball Z | Universo API' },
  { path: 'dragon-ball/:id', component: DbzDetail, title: 'Detalle Dragon Ball Z | Universo API' },
  { path: 'pokemon', component: ComingSoon, data: { title: 'Pokémon' } },
  { path: 'demon-slayer', component: ComingSoon, data: { title: 'Demon Slayer' } },
  { path: '**', redirectTo: '' }
];
