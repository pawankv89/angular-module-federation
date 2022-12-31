import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';
import { albumsRoutes } from './routes';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(albumsRoutes)
  ]
})
export class AlbumsModule { }
