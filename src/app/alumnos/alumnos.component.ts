import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  title: string;
  alumnos: string[];
  
  constructor() { 

    console.trace("Alumnos Constructor.");
    this.title = 'Alumnos';
    this.alumnos=["Alain", "Valery", "Andrea", "Adriana", "Adrián", "Asier", "Raul", "Luis"];
  }

  ngOnInit() {

    console.trace("Alumnos OnInit.");
    
  }

}
