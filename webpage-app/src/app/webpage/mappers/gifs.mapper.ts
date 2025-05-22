import { GiphyItem } from "../interfaces/giphy.interface";
import { MyGif } from "../interfaces/mygif.interface";

export class GifMapper{

  //Esta funcion solamente sirve para obtener 1 objeto como Item

  static mapGiphyItemToGif( item: GiphyItem): MyGif{
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }

  // Esta funcion ahora nos permite usar el metodo de arriba de 1 solo objeto pero ahora que la respuesta será un arreglo

  static mapGiphyItemToGifArray( items: GiphyItem[]): MyGif[]{
    return items.map(this.mapGiphyItemToGif);
  }
}
