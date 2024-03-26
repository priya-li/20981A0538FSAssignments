import { Component } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrl: './fav-photos.component.css'
})
export class FavPhotosComponent {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = '';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }


}
