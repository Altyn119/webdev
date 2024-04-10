import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.loadPosts('angular');
  }

  loadPosts(subreddit: string): void {
    this.redditService.getPosts(subreddit).subscribe(posts => {
      this.posts = posts;
    });
  }
}
