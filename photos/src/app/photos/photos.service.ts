import { Injectable } from '@angular/core';
import { RemoteService } from './remote.service';

const PHOTOS_BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private remoteService: RemoteService) { }

  getPhotosList() {
    return this.remoteService.get(PHOTOS_BASE_URL);
  }
}
