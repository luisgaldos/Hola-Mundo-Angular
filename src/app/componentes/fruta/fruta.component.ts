import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  // Declaración de Atributos
  title: string;
  frutas: string[];


  constructor() { 
    
    console.trace('FrutaComponent Constructor.');
    this.title = 'Fruta';
    this.frutas = ['Fresa', 'Plátano', 'Mango', 'Kiwi'];

  }

  ngOnInit() {

    console.trace('FrutaComponent OnInit.');

  }

}
