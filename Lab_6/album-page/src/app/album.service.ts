import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private client: HttpClient) { }
  getPhotos(id: number):Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  updateAlbum(album: Album):Observable<Album>{
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album)
  }
  deleteAlbum(album: Album): Observable<any>{
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${album.id}`)
  }
}
