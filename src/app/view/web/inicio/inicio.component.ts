import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { UtilitariosService } from 'src/app/metodos/utilitarios/utilitarios.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  urls: any;
  lstTemas = [];
  lstServicios = [];
  plan = "";
  precio = 0;
  
  fmrPlan = {
    nombre: "",
    email: "",
    telefono: "",
    ventas: "",
    compras: "",
    afiliados: ""
  };

  constructor(private conexion: ApiService, private spinner: NgxSpinnerService, public generico: UtilitariosService,private router: Router) { }

  ngOnInit(): void {
    this.urls = environment;
    this.consultarServicios();
  }

  consultarServicios() {
    this.spinner.show();
    this.conexion.get("listarServicios", "").subscribe(
      (res: any) => {
        this.spinner.hide();
        console.log(res);
        if (res.tipo == 1) {
          this.lstTemas = res.resultado.temas;
          this.lstServicios = res.resultado.servicios;
        } else {
          alert("Error en el servicio");
        }
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }

  abrirModalPlanes(valor) {
    if (valor == 1) {
      var plan = { "nombre": "PN NO OBLIGADAS", "precio": 9.99 };
      this.plan = plan.nombre;
      this.precio = plan.precio;
    } else if (valor == 2) {
      var plan = { "nombre": "PROFESIONALES Y PN OBLIGADAS", "precio": 99.99 };
      this.plan = plan.nombre;
      this.precio = plan.precio;
    } else if (valor == 3) {
      var plan = { "nombre": "PEQUEÑA Y MEDIANA EMPRESA", "precio": 149.99 };
      this.plan = plan.nombre;
      this.precio = plan.precio;
    }
    $('#modalPlanes').modal('toggle');
  }

  cotizarPlan() {
    var data = {
      tipo: 1,
      asunto: 'SOLICITUD COMPRA PLAN DE SERVICIOS | ' + this.plan,
      nombre: this.fmrPlan.nombre,
      plan: this.plan,
      precio: this.precio,
      email: this.fmrPlan.email,
      telefono: this.fmrPlan.telefono,
      ventas: this.fmrPlan.ventas,
      compras: this.fmrPlan.compras,
      afiliados: this.fmrPlan.afiliados
    }

    if (this.validacion()) {
      this.spinner.show();
      this.conexion.post("enviarEmail", "", data).subscribe(
        (res: any) => {
          this.spinner.hide();
          console.log(res);
          if (res.tipo == 1) {
            this.generico.alerta("success", "Planes", "Solicitud Enviada Exitosamente.");
            this.limpiar();
            $('#modalPlanes').modal('toggle');
          } else {
            this.generico.alerta("warning", "Planes", "Error al enviar la solicitud, intente nuevamente mas tarde.");
          }
        },
        err => {
          this.spinner.hide();
          this.generico.alerta("warning", "Planes", "Error al enviar la solicitud, intente nuevamente mas tarde.");
          console.log(err);
        }
      );
    }
  }

  public validacion() {
    if (this.fmrPlan.nombre == "") {
      this.generico.notificacion("warning", "Ingresar un nombre completo");
      return false;
    } if (!this.generico.validarEmail(this.fmrPlan.email)) {
      this.generico.notificacion("warning", "Ingresar un email válido");    
      return false;
    }if (this.fmrPlan.telefono == "") {
      this.generico.notificacion("warning", "Ingresar un número teléfonico");
      return false;
    }if (this.fmrPlan.ventas == "") {
      this.generico.notificacion("warning", "Ingresar un número de facturas aproximadas al mes");    
      return false;
    }if (this.fmrPlan.compras == "") {
      this.generico.notificacion("warning", "Ingresar un número de compras aproximadas al mes");     
      return false;
    }if (this.fmrPlan.afiliados == "") {
      this.generico.notificacion("warning", "Ingresar un número de empleados afiliados");
      return false;
    }
    return true;
  }

  public limpiar() {
    this.fmrPlan = {
      nombre: "",
      email: "",
      telefono: "",
      ventas: "",
      compras: "",
      afiliados: ""
    };
  }

  detalleTema(detalle) {
    this.router.navigate(['/tema/detalle/' + detalle.idTema]);
    console.log(detalle);
  }

}
