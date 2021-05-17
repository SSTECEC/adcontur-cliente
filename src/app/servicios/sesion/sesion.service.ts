import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private keyEncriptacion: string = "1A4F8B611F849FC5AB711999DC5D6A2C034980FA1E25A66ADD5B0C20081F4F25";
  private keySesion: string = "l:key";

  constructor(private router: Router) { }

  cerrarSesion() {
    localStorage.removeItem(this.keySesion);
    this.router.navigate(['/']);
  }

  iniciarSesion(usuario: any) {
    var datosCifrados = CryptoJS.AES.encrypt(JSON.stringify(usuario), this.keyEncriptacion).toString();
    localStorage.setItem(this.keySesion, datosCifrados);
    console.log(usuario);
    var rol = usuario.Rol;

    if (rol != "ADMINISTRADOR") {
      this.router.navigate(['/linea']);
    }
  }

  verificarCredencialesRutas() {
    var datos: any = localStorage.getItem(this.keySesion);
    if (datos === null) {
      this.router.navigate(['/login']);
    }
  }

  obtenerDatos() {
    var datosPlanos: any;
    var datos = localStorage.getItem(this.keySesion);
    if (datos === null) {
    } else {
      var bytes = CryptoJS.AES.decrypt(datos, this.keyEncriptacion);
      datosPlanos = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return datosPlanos;
  }
}
