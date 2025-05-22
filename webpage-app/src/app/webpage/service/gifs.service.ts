import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { MyGif } from '../interfaces/mygif.interface';
import { GifMapper } from '../mappers/gifs.mapper';

@Injectable({providedIn: 'root'})

export class GifService {
  private http = inject(HttpClient)

  constructor(){
    this.loadTrendingGifs();
  }

  trendingGifs = signal<MyGif[]>([]);

  loadTrendingGifs(){
      this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/trending`,{
        params: {
          api_key: environment.giphyApiKey,
          limit: 15
        }
      }).subscribe( (response) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(response.data);     //Insertamos un MAPPER
        this.trendingGifs.set(gifs)
        console.log(gifs);
      });
  }
}
