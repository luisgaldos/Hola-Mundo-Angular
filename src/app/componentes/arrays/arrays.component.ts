import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';
import { Colores } from '../../model/colores.enum';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  arFrutas: Fruta[];
  ofertas: Fruta[];
  nombres: string[];
  precioTotal: number;
  primeraFrutaOferta : Fruta;
  frutaOfertaVerde: Fruta;
  
  constructor() { 

    this.arFrutas = [];
    this.ofertas = [];
    this.nombres = [];
    this.precioTotal = 0;

  }

  ngOnInit() {
    this.inicializarFrutas();

    // PROGRAMACION FUNCIONAL
    this.ofertas = this.arFrutas.filter(fruta => fruta.oferta === true);
    
    this.nombres = this.arFrutas.map(fruta => fruta.nombre);

    this.precioTotal = this.arFrutas.map(fruta => fruta.precio).reduce( (c, p) => c + p);

    this.primeraFrutaOferta = this.arFrutas.find(fruta => fruta.oferta);

    this.frutaOfertaVerde = this.arFrutas.find( f => f.colores.find( c => c === Colores.V) === 'Verde');
  }

  inicializarFrutas(): void {
    
    this.arFrutas = [];

    let bananaColores: Colores[];
    bananaColores = [Colores.A, Colores.N];

    let f = new Fruta("Banana", 3.15, 500, bananaColores, true);
    f.imagen = 'https://png.pngtree.com/element_origin_min_pic/16/07/06/17577cd1da7eaaa.jpg';
    this.arFrutas.push(f);

    let peraColores: Colores[];
    peraColores = [Colores.A, Colores.V];

    f = new Fruta("Pera", 2.00, 350, peraColores, false);
    f.imagen = 'https://pngimage.net/wp-content/uploads/2018/06/pera-png.png';
    this.arFrutas.push(f);

    let fresaColores: Colores[];
    fresaColores = [Colores.P, Colores.R, Colores.V];

    f = new Fruta("Fresa", 0.75, 100, fresaColores, true);
    f.imagen = 'https://banner2.kisspng.com/20180328/jxe/kisspng-strawberry-pie-fruit-strawberry-5abba216a60cc0.7624839615222461666802.jpg';
    this.arFrutas.push(f);
  }
}
