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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FlujoInformacionComponent } from './flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { Page404Component } from './componentes/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    AlumnosComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
