import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../../model/videojuego';
import { Persona } from '../../../model/persona';
import { Genero } from '../../../model/genero.enum';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  title: string;
  videojuego: Videojuego;
  yo: Persona;
  persona: Persona;
  videojuegos: Videojuego[];

  constructor() { 
    this.title = 'Aprendiendo a usar clases';
    
    this.videojuego = new Videojuego();
    this.yo = new Persona();
    this.persona = new Persona();
    this.videojuegos = [];
  }

  ngOnInit() {

    this.inicializarPersonas();
    this.inicializarVideojuegos();
  }

  inicializarPersonas(): void {

    this.yo.nombre = "Luis";
    this.yo.apellidos = ['Galdos', 'Garcia'];
    this.yo.edad = 26;
    this.yo.email = "email@gmail.com";
    this.yo.sexo = Genero.H;

    this.persona.nombre = "Ander";
    this.persona.apellidos = ['Uraga', 'El Fary'];
    this.persona.edad = 36;
    this.persona.email = "email@gmail.com";
    this.persona.sexo = Genero.H;

  }

  inicializarVideojuegos(): void {

    let v: Videojuego;
    
    v = new Videojuego();
    v.titulo = 'Mario Bros';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Donkey Kong';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Zelda';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Space Invaders';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Final Fantasy X';
    this.videojuegos.push(v);
  }

}
