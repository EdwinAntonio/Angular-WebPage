import { Component, input } from '@angular/core';
import { TrendingItemComponent } from "../trending-item/trending-item.component";



@Component({
  selector: 'webpage-trending-list',
  templateUrl: './trending-list.component.html',
  imports: [
    TrendingItemComponent
],
})
export class TrendingListComponent {
  gifs = input.required<string[]>();
 }
