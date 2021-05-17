import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/servicios/sesion/sesion.service';

@Component({
  selector: 'app-usuario-sesion',
  templateUrl: './usuario-sesion.component.html',
  styleUrls: ['./usuario-sesion.component.css']
})
export class UsuarioSesionComponent implements OnInit {

  datosSesion: any;
  vista = false;

  constructor(public sesion: SesionService) { }

  ngOnInit(): void {
    this.verificarSesion();
  }

  verificarSesion() {
    this.datosSesion = this.sesion.obtenerDatos();
    if(this.datosSesion != undefined){
      this.vista = true;
    }
    console.log(this.datosSesion);
  }

  cerrarSesion(){
    this.sesion.cerrarSesion();
  }
}
