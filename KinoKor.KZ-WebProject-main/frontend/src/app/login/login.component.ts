import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {AppComponent} from '../app.component';
import {Movie} from "../movies";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,
              private loginService: LoginService,
              private movieSer: MovieService

  ) {
    AppComponent.isLogged = false;
  }
  username='';
  password='';
  movies: Movie[]=[];

  newMovie: Movie = {
    id: 0,
    name: '',
    description: '',
    genre: 0,
    rate: '',
    length: '',
    img: '',
    cover: '',
    like: 0
  };
  selectedMovie: | Movie | null = null;

  get isLogged(): boolean{
    return AppComponent.isLogged;
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      AppComponent.isLogged = true
    }
    this.getMovies()
  }

  login(){
    this.loginService.login(this.username, this.password).subscribe((data)=>{
      localStorage.setItem('token', data.token);
      AppComponent.isLogged=true;
    });
  }

  getMovies(): void{
    this.movieSer.getMovies().subscribe((data)=>{
      console.log(data)
      this.movies=data;
    });
  }

  addMovie(): void {
    this.movieSer.createMovies(this.newMovie).subscribe(() => {
      this.getMovies();
      this.newMovie = {
        id: 0,
        name: '',
        description: '',
        genre: 0,
        rate: '',
        length: '',
        img: '',
        cover: '',
        like: 0
      };
    }, error => {
      console.log(error);
    });
  }


  updateMovie(): void {
    // @ts-ignore
    this.movieSer.updateMovies(this.selectedMovie.id.toString(), this.selectedMovie).subscribe(
      response => {
        this.getMovies();
        // @ts-ignore
        this.selectedMovie = null;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect(movie: Movie | null): void {
    if (movie === null) {
      this.selectedMovie = null;
    } else {
      this.selectedMovie = movie;
    }
  }

  deleteMovie(id: number): void {
    this.movieSer.deleteMovies(id.toString()).subscribe(
      response => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
}
