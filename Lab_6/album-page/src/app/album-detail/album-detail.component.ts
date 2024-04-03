import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {Album} from "../models";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  constructor(private route:ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.loaded = true;
  }
  renameAlbum(){
    const form = document.querySelector('input');
    if(form && form.value != ''){
      this.album.title = form.value;
      this.albumService.updateAlbum(this.album).subscribe((album) => {
        this.album = album;
      })
      form.value = "";
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
    let _id = params.get('id');
    if(_id){
      let id = +_id;
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      })
    }
    }
  )
  }

}
