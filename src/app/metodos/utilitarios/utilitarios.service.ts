import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilitariosService {

  constructor() { }

  public formatoCampo(valor, restriccion, caracteres, tipo) {
    var out = '';
    var filtro = '' + restriccion + '';
    for (var i = 0; i < valor.length; i++) {
      if (filtro.indexOf(valor.charAt(i)) != -1) {
        if (out.length >= caracteres) {
          out.substr(0, caracteres);
        } else {
          out += valor.charAt(i);
        }
      }
    }
    return (tipo == 1) ? out.toUpperCase() : out;
  }

  public validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public alerta(tipo: any, titulo: any, texto: any) {
    Swal.fire({
      icon: tipo,
      title: titulo,
      html: texto
    })
  }

  public notificacion(tipo: any, texto: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: tipo,
      title: texto
    })
  }
}
