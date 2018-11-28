import { Pipe, PipeTransform } from '@angular/core';
import { Videojuego } from '../model/videojuego';

@Pipe({
  name: 'alquilado'
})
export class VideojuegoPipe implements PipeTransform {

  transform(value: Videojuego[], condicion: boolean): Videojuego[] {

    let resultado: Videojuego[] = [];
    for (let v of value) {

      if (v.alquilado === condicion) {

        resultado.push(v);

      }
    }

    return resultado;
  }

}
