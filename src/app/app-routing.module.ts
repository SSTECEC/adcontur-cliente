import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/adcontur/index/index.component';
import { IessComponent } from './pages/adcontur/recursos/iess/iess.component';
import { MrlComponent } from './pages/adcontur/recursos/mrl/mrl.component';
import { MunicipiosComponent } from './pages/adcontur/recursos/municipios/municipios.component';
import { OtrosComponent } from './pages/adcontur/recursos/otros/otros.component';
import { SriComponent } from './pages/adcontur/recursos/sri/sri.component';
import { SuperciasComponent } from './pages/adcontur/recursos/supercias/supercias.component';
import { AsesoriaComponent } from './pages/adcontur/servicios/asesoria/asesoria.component';
import { AuditoriasComponent } from './pages/adcontur/servicios/auditorias/auditorias.component';
import { CapacitacionComponent } from './pages/adcontur/servicios/capacitacion/capacitacion.component';
import { ContabilidadComponent } from './pages/adcontur/servicios/contabilidad/contabilidad.component';
import { ImpuestosComponent } from './pages/adcontur/servicios/impuestos/impuestos.component';
import { NominaComponent } from './pages/adcontur/servicios/nomina/nomina.component';
import { RecursosComponent } from './pages/adcontur/servicios/recursos/recursos.component';
import { TemasComponent } from './pages/adcontur/temas/temas.component';
import { TrabajaNosotrosComponent } from './pages/adcontur/trabaja-nosotros/trabaja-nosotros.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  
  { path: '', component: IndexComponent, pathMatch: 'full' },

  { path: 'servicios/contabilidad', component: ContabilidadComponent },
  { path: 'servicios/impuestos', component: ImpuestosComponent },
  { path: 'servicios/auditorias', component: AuditoriasComponent },
  { path: 'servicios/nomina', component: NominaComponent },
  { path: 'servicios/capacitacion', component: CapacitacionComponent },
  { path: 'servicios/asesoria', component: AsesoriaComponent },
  { path: 'servicios/recursos', component: RecursosComponent },

  { path: 'temas/interes', component: TemasComponent },
  { path: 'trabaja/nosotros', component: TrabajaNosotrosComponent },

  { path: 'recursos/linea/sri', component: SriComponent },
  { path: 'recursos/linea/iess', component: IessComponent },
  { path: 'recursos/linea/mrl', component: MrlComponent },
  { path: 'recursos/linea/supercias', component: SuperciasComponent },
  { path: 'recursos/linea/municipio', component: MunicipiosComponent },
  { path: 'recursos/linea/otros', component: OtrosComponent },

  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
