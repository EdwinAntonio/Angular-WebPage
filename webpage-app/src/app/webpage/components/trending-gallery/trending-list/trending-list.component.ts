import { Component, input } from '@angular/core';
import { TrendingItemComponent } from "../trending-item/trending-item.component";
import { MyGif } from 'src/app/webpage/interfaces/mygif.interface';



@Component({
  selector: 'webpage-trending-list',
  templateUrl: './trending-list.component.html',
  imports: [
    TrendingItemComponent
],
})
export class TrendingListComponent {
  gifs = input.required<MyGif[]>();
 }
