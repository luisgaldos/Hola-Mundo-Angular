import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MatToolbarModule,  
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
 } from '@angular/material';
 import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './componentes/fruta/fruta.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { FlujoInformacionComponent } from './componentes/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { Page404Component } from './componentes/page404/page404.component';
import { DetalleComponent } from './componentes/videojuego/detalle/detalle.component';
import { PipeComponent } from './componentes/pipe/pipe.component';
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PersonasPipe } from './pipes/personas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    AlumnosComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    DetalleComponent,
    PipeComponent,
    VideojuegoPipe,
    PersonasComponent,
    PersonasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
