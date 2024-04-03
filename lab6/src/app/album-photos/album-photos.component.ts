import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  albumId: any;
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap?.get('id')!;
    this.albumsService.getPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }
}