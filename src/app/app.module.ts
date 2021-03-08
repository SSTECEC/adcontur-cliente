import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/adcontur/index/index.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { TemasComponent } from './pages/adcontur/temas/temas.component';
import { ContabilidadComponent } from './pages/adcontur/servicios/contabilidad/contabilidad.component';
import { ImpuestosComponent } from './pages/adcontur/servicios/impuestos/impuestos.component';
import { AuditoriasComponent } from './pages/adcontur/servicios/auditorias/auditorias.component';
import { NominaComponent } from './pages/adcontur/servicios/nomina/nomina.component';
import { CapacitacionComponent } from './pages/adcontur/servicios/capacitacion/capacitacion.component';
import { AsesoriaComponent } from './pages/adcontur/servicios/asesoria/asesoria.component';
import { RecursosComponent } from './pages/adcontur/servicios/recursos/recursos.component';
import { SriComponent } from './pages/adcontur/recursos/sri/sri.component';
import { IessComponent } from './pages/adcontur/recursos/iess/iess.component';
import { MrlComponent } from './pages/adcontur/recursos/mrl/mrl.component';
import { SuperciasComponent } from './pages/adcontur/recursos/supercias/supercias.component';
import { MunicipiosComponent } from './pages/adcontur/recursos/municipios/municipios.component';
import { OtrosComponent } from './pages/adcontur/recursos/otros/otros.component';
import { HeaderComponent } from './pages/componentes/header/header.component';
import { FooterComponent } from './pages/componentes/footer/footer.component';
import { TrabajaNosotrosComponent } from './pages/adcontur/trabaja-nosotros/trabaja-nosotros.component';
import { FloatComponent } from './pages/componentes/float/float.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    TemasComponent,
    ContabilidadComponent,
    ImpuestosComponent,
    AuditoriasComponent,
    NominaComponent,
    CapacitacionComponent,
    AsesoriaComponent,
    RecursosComponent,
    SriComponent,
    IessComponent,
    MrlComponent,
    SuperciasComponent,
    MunicipiosComponent,
    OtrosComponent,
    HeaderComponent,
    FooterComponent,
    TrabajaNosotrosComponent,
    FloatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents : [FooterComponent,HeaderComponent,FloatComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
