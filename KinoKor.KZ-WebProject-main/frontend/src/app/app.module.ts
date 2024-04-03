import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RatingModule} from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { GenreComponent } from './genre/genre.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { FilterPipe } from './movie-list/filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import {AuthInterceptor} from './AuthInterceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

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
    path: "",
    redirectTo: "movies",
    pathMatch:"full"
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
  {
    path: "genre/:genreId",
    component: GenreComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    StartComponent,
    GenreComponent,
    MovieFilterComponent,
    FilterPipe,
    ProfileComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule,
    RouterModule.forRoot(routes),
    // RouterModule.forRoot([
    //   {path: '', component: MovieListComponent},
    //   {path: 'movies', component: MovieListComponent},
    //   {path: 'genre/:genreId', component: GenreComponent},
    //   {path: 'login', component: LoginComponent},
    //   {path: 'register', component: RegisterComponent},
    // ]),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    HttpClientModule,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
