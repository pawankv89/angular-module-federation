import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  listItems: any = [];
  listItemHeaders: any = [];

  ngOnInit(): void {

    // Get Photos List
    this.photosService.getPhotosList().subscribe((albums)=>{
      this.listItems = albums;
      if(this.listItems.length > 0){
        this.listItemHeaders = Object.keys(this.listItems[0]);
      }
    })
  }

}
