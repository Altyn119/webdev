import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {GenreComponent} from './genre/genre.component';
import {StartComponent} from "./start/start.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";

const routes: Routes = [
  {
    path: "movies",
    component: MovieListComponent
  },
  {
    path: "movies/:id",
    component: MovieDetailsComponent
  },
  {
    path: "genres/:id",
    component: GenreComponent
  },
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  // {
  //   path: "genre/:genreId",
  //   component: GenreComponent
  // },
  {
    path: "",
    redirectTo: "movies",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
