import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DbzService } from '../../services/dbz.service';
import { DbzCharacter } from '../../interfaces/dbz-character';

@Component({
  selector: 'app-dbz-detail',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './dbz-detail.html',
  styleUrl: './dbz-detail.css'
})
export class DbzDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(DbzService);
  character?: DbzCharacter;
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
