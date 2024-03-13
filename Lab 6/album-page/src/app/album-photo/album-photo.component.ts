import {Component, OnInit} from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent  implements OnInit{
  photos:Photo[];
  albumId:number;
  constructor(private route:ActivatedRoute, private albumService: AlbumService) {
    this.photos = [];
    this.albumId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
        let _id = params.get('id');
        if(_id){
          let id = +_id;
          this.albumId = id;
          this.albumService.getPhotos(id).subscribe((photos)=>{
            this.photos = photos;
          })
        }
      }
    )
  }


}
