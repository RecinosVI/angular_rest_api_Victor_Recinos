import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DigimonService } from '../../services/digimon.service';
import { Digimon } from '../../interfaces/digimon';

@Component({
  selector: 'app-digimon-detail',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './digimon-detail.html',
  styleUrl: './digimon-detail.css'
})
export class DigimonDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(DigimonService);
  digimon?: Digimon;
  loading = true;

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name') ?? '';
    this.service.getAll().subscribe({
      next: (items) => {
        this.digimon = items.find(item => item.name.toLowerCase() === name.toLowerCase());
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
