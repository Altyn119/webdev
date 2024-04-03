import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Movie} from './movies';
import {Observable} from 'rxjs';
import {Commentary} from './commentary';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private client: HttpClient) { }
  BASE_URL: string = 'http://127.0.0.1:8000';
  getMovies(): Observable<Movie[]>{
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/movies/`);
  }

  getMovieDetail(id: string): Observable<Movie>{
    return this.client.get<Movie>(`${this.BASE_URL}/api/movies/${id}/`);
  }

  getMoviesByGenreId(id: any): Observable<Movie[]>{
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/genres/${id}/`);
  }

  createMovies(movie: Movie): Observable<Movie>{
    return this.client.post<Movie>(`${this.BASE_URL}/api/movie2/`, movie);
  }

  updateMovies(id: any, movie: Movie): Observable<Movie>{
    return this.client.put<Movie>(`${this.BASE_URL}/api/movie2/${id}/`, movie);
  }

  deleteMovies(id: string): Observable<Movie>{
    return this.client.delete<Movie>(`${this.BASE_URL}/api/movie2/${id}/`);
  }

  getComments(id: string): Observable<Commentary[]>{
    return this.client.get<Commentary[]>(`${this.BASE_URL}/api/movies/${id}/comments/`);
  }

  createComment(id: string, comment: Commentary): Observable<any>{
    return this.client.post(`${this.BASE_URL}/api/movies/${id}/comments/`, comment);
  }

  updateComment(id: string, comment: Commentary): Observable<any>{
    return this.client.put(`${this.BASE_URL}/api/movies/${id}/comments/${comment.id}/`, comment);
  }

  deleteComment(id: string, commentId: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/api/movies/${id}/comments/${commentId}/`);
  }
}

