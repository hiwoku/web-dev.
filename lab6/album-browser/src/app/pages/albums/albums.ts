import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Album } from '../../models/album';
import { AlbumService } from '../../services/album';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
  loading = true;
  error = '';

  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  constructor(private albumService: AlbumService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().pipe(take(1)).subscribe({
      next: (albums) => {
        this.albumsSubject.next(albums);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number, e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.albumService.deleteAlbum(id).pipe(take(1)).subscribe({
      next: () => {
        this.albumsSubject.next(this.albumsSubject.value.filter(a => a.id !== id));
      },
      error: () => {
        this.error = 'Delete failed.';
      }
    });
  }
}