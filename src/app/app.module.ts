import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/web/inicio/inicio.component';
import { DashboardComponent } from './view/administrador/dashboard/dashboard.component';
import { HeaderComponent } from './view/web/componentes/header/header.component';
import { FooterComponent } from './view/web/componentes/footer/footer.component';
import { TrabajaComponent } from './view/web/trabaja/trabaja.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './servicios/api/api.service';
import { ServicioComponent } from './view/web/servicio/servicio.component';
import { MapComponent } from './view/web/componentes/map/map.component';
import { LineaComponent } from './view/web/linea/linea.component';
import { TemasComponent } from './view/web/temas/temas.component';
import { LineaDetalleComponent } from './view/web/linea-detalle/linea-detalle.component';
import { UtilitariosService } from './metodos/utilitarios/utilitarios.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { TemasDetalleComponent } from './view/web/temas-detalle/temas-detalle.component';
import { LoginComponent } from './view/login/login.component';
import { SesionService } from './servicios/sesion/sesion.service';
import { UsuarioSesionComponent } from './view/web/componentes/usuario-sesion/usuario-sesion.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ServicioComponent,
    TrabajaComponent,
    MapComponent,
    LineaComponent,
    TemasComponent,
    LineaDetalleComponent,
    TemasDetalleComponent,
    LoginComponent,
    UsuarioSesionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule
  ],
  providers: [ApiService, UtilitariosService, SesionService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
