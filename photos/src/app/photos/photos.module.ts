import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule } from '@angular/router';
import { photosRoutes } from './routes';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(photosRoutes)
  ]
})
export class PhotosModule { }
