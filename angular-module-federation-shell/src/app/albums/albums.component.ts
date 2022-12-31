import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumsService: AlbumsService) { }

  listItems: any = [];
  listItemHeaders: any = [];

  ngOnInit(): void {

    // Get Albums List
    this.albumsService.getAlbumsList().subscribe((albums)=>{
      this.listItems = albums;
      if(this.listItems.length > 0){
        this.listItemHeaders = Object.keys(this.listItems[0]);
      }
    })
  }

}
