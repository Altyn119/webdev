import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  private readonly baseUrl = 'https://www.reddit.com/';

  constructor(private http: HttpClient) {}

  getPosts(subreddit: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}r/${subreddit}.json`);
  }
}
