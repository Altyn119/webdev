import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.albumsUrl)
      .pipe(
        map(albums => albums.map(album => {
          return { id: album.id, title: album.title };
        })),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.message}`;
    } else {
      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getAlbum(id: number): Observable<any> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateAlbum(album: any): Observable<any> {
    const url = `${this.albumsUrl}/${album.id}`;
    return this.http.put(url, album);
  }

  deleteAlbum(id: number): Observable<any> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.delete(url);
  }

  getPhotos(albumId: number): Observable<any[]> {
    const url = `${this.photosUrl}?albumId=${albumId}`;
    return this.http.get<any[]>(url);
  }
 
}