import { Component, input } from '@angular/core';

@Component({
  selector: 'webpage-trending-item',
  templateUrl: './trending-item.component.html',
  imports: [

  ],
})
export class TrendingItemComponent {
  itemUrl = input.required<string>();
}
