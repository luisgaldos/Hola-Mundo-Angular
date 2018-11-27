import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-informacion',
  templateUrl: './flujo-informacion.component.html',
  styleUrls: ['./flujo-informacion.component.scss']
})
export class FlujoInformacionComponent implements OnInit {

  title: string;
  clase: string;
  visible: boolean;
  txtBoton: string;
  nombre: string;

  constructor() { 

    console.trace("Constructor FlujoInformacionComponent");
    this.title = "Flujo de Información Modelo - Vista y Vista - Controlador";
    this.clase = 'remarcar';
    this.visible = true;
    this.txtBoton = 'Ocultar';
    this.nombre = '';
  }

  ngOnInit() {

    console.trace("FlujoInformacionComponent OnInit");

  }

  showHide() {

    console.trace('Click ShowHide() Button');
    this.visible = (this.visible) ? false : true;
    this.txtBoton =  (this.visible) ? 'Ocultar' : 'Mostrar';
  }

}
