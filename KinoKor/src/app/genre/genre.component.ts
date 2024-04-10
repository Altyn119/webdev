import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {GenreService} from '../genre.service';
import {Movie} from '../movies';
import {Genre} from '../genres';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit{
  movies: Movie[] = [];
  genre: Genre | undefined;
  searchText: any = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService,
              private genresService: GenreService
  ) {
    this.router.events.subscribe((value=>{
      this.getMovies();
      this.getGenre();
    }));
  }

  get isLogged(): boolean{
    return AppComponent.isLogged;
  }

  ngOnInit(): void{
    this.getMovies()
    this.getGenre();
  }

  getMovies(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.movieService.getMoviesByGenreId(id).subscribe((data) => {
          this.movies = data;
          console.log(data);
        });
      }
    });
  }

  getGenre(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.genresService.getGenre(id).subscribe((data) => {
          this.genre = data;
          console.log(data);
        });
      }
    });
  }
}