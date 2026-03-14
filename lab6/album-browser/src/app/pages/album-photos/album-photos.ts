import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Photo } from '../../models/photo';
import { AlbumService } from '../../services/album';

@Component({
  standalone: true,
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotosComponent {
  loading = true;
  error = '';
  albumId = 0;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {
    this.route.paramMap.pipe(
      map(p => Number(p.get('id'))),
      switchMap(id => {
        this.loading = true;
        this.error = '';
        this.photos = [];
        this.albumId = id;

        if (!id) return of(null);
        return this.albumService.getAlbumPhotos(id);
      })
    ).subscribe({
      next: (photos) => {
        if (!photos) {
          this.error = 'Invalid album id.';
          this.loading = false;
          return;
        }
        this.photos = photos;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
      }
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}