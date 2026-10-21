import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DemonSlayerService } from '../../services/demon-slayer.service';
import { DemonSlayerCharacter } from '../../interfaces/demon-slayer-character';

@Component({
  selector: 'app-demon-slayer-detail',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './demon-slayer-detail.html',
  styleUrl: './demon-slayer-detail.css'
})
export class DemonSlayerDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(DemonSlayerService);
  character?: DemonSlayerCharacter;
  loading = true;
  error = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(id) || id <= 0) { this.loading = false; this.error = true; return; }
    this.service.getById(id).subscribe({
      next: character => { this.character = character; this.loading = false; },
      error: () => { this.loading = false; this.error = true; }
    });
  }
}
