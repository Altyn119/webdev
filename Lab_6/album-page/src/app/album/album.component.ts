import { Component } from '@angular/core';
import {Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albums:Album[];
  constructor(private albumService:AlbumService) {
    this.albums = [];
  }
  deleteAlbum(album : Album){
    this.albumService.deleteAlbum(album);
    this.albums = this.albums.filter((x)=> x.id !== album.id);
  }
  ngOnInit(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
