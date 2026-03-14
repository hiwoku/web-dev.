import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Album } from '../../models/album';
import { AlbumService } from '../../services/album';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent {
  loading = true;
  error = '';

  album: Album | null = null;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {
    this.route.paramMap.pipe(
      map(p => Number(p.get('id'))),
      switchMap(id => {
        this.loading = true;
        this.error = '';
        this.album = null;

        if (!id) return of(null);
        return this.albumService.getAlbum(id);
      })
    ).subscribe({
      next: (album) => {
        if (!album) {
          this.error = 'Invalid album id.';
          this.loading = false;
          return;
        }
        this.album = album;
        this.editedTitle = album.title;
        this.cdr.detectChanges();
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album.';
        this.loading = false;
      }
    });
  }

  save() {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.editedTitle.trim() };
    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        this.album = res;
        this.editedTitle = res.title;
      },
      error: () => {
        this.error = 'Update failed.';
      }
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}