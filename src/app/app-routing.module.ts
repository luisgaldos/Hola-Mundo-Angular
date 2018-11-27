import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { FrutaComponent } from './componentes/fruta/fruta.component';
import { Page404Component } from './componentes/page404/page404.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';


const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'fruta', component : FrutaComponent },
  { path: 'alumnos', component : AlumnosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component : Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
