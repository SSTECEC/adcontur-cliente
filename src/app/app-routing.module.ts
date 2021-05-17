import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './view/web/inicio/inicio.component';
import { TrabajaComponent } from './view/web/trabaja/trabaja.component';
import { ServicioComponent } from './view/web/servicio/servicio.component';
import { LineaComponent } from './view/web/linea/linea.component';
import { TemasComponent } from './view/web/temas/temas.component';
import { LineaDetalleComponent } from './view/web/linea-detalle/linea-detalle.component';
import { TemasDetalleComponent } from './view/web/temas-detalle/temas-detalle.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'trabaja-nosotros', component: TrabajaComponent },
  { path: 'temas-interes', component: TemasComponent },
  { path: 'servicio/:id', component: ServicioComponent },
  { path: 'linea', component: LineaComponent },
  { path: 'linea/detalle/:id', component: LineaDetalleComponent },
  { path: 'tema/detalle/:id', component: TemasDetalleComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
