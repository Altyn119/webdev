import {Component, OnInit} from '@angular/core';
import {GenreService} from '../genre.service';
import {Genre} from '../genres';
import {Router} from "@angular/router";
import {Movie} from '../movies';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit{
  genres: Genre[]=[];

  constructor(private genreService: GenreService,
  public router: Router) {
  }

  goToHome(){
    this.router.navigate(["movies"])
  }

  ngOnInit(){
    this.getGenres();
  }

  getGenres(): void{
    this.genreService.getGenres().subscribe((data)=>{
      console.log(data);
      this.genres=data;
    });
  }

}
