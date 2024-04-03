import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  photos: any[] = [];
  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap?.get('id')!;
    this.albumsService.getAlbum(id).subscribe((album) => {
      this.album = album;
      this.albumsService.getPhotos(album.id).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }

  saveAlbum(): void {
    this.albumsService.updateAlbum(this.album).subscribe(() => {
      alert('Album saved successfully!');
    });
  }
}