import { Component, inject, signal } from '@angular/core';
import { TrendingListComponent } from "../../components/trending-gallery/trending-list/trending-list.component";
import { GifService } from '../../service/gifs.service';

@Component({
  selector: 'trending-page',
  templateUrl: './trending-page.component.html',
  imports: [
    TrendingListComponent
]
})

export default class TrendingPageComponent  {
  gifService = inject(GifService)
}
