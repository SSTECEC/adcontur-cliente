import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/web/inicio/inicio.component';
import { DashboardComponent } from './view/administrador/dashboard/dashboard.component';
import { HeaderComponent } from './view/web/componentes/header/header.component';
import { FooterComponent } from './view/web/componentes/footer/footer.component';
import { TemasinteresComponent } from './view/web/temasinteres/temasinteres.component';
import { TrabajaComponent } from './view/web/trabaja/trabaja.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './servicios/api/api.service';
import { ServicioComponent } from './view/web/servicio/servicio.component';
import { MapComponent } from './view/web/componentes/map/map.component';
import { LineaComponent } from './view/web/linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TemasinteresComponent,
    ServicioComponent,
    TrabajaComponent,
    MapComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
