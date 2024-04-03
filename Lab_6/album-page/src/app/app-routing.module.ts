import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumComponent} from "./album/album.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotoComponent} from "./album-photo/album-photo.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'albums', component: AlbumComponent},
  {path: 'albums/:id', component: AlbumDetailComponent},
  {path: 'albums/:id/photos', component: AlbumPhotoComponent},
  {path:'', redirectTo:'home', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
