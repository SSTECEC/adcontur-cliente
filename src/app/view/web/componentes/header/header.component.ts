import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';
declare var $: any;


@Component({
  selector: 'app-header-web',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urls: any;
  lstServicios = [];
  lstRecursos = [];
  constructor(private conexion: ApiService, private router: Router) {
    $(document).ready(function () {
      $("#menu-movil").css("display", "none");
      $("#menu-servicios").css("display", "none");
      $("#menu-linea").css("display", "none");

      $("#btnMenu").click(function () {
        var estado = $('#menu-movil').css('display');
        if (estado == "none") {
          $("#menu-movil").css("display", "block");
        } else {
          $("#menu-movil").css("display", "none");
        }
        console.log(estado);
      });


      $("#btn-Servicios").click(function () {
        var estado = $('#menu-servicios').css('display');
        if (estado == "none") {
          $("#menu-servicios").css("display", "block");
        } else {
          $("#menu-servicios").css("display", "none");
        }
        console.log(estado);
      });

      $("#btn-linea").click(function () {
        var estado = $('#menu-linea').css('display');
        if (estado == "none") {
          $("#menu-linea").css("display", "block");
        } else {
          $("#menu-linea").css("display", "none");
        }
        console.log(estado);
      });
    });

  }

  ngOnInit(): void {
    this.urls = environment;
    this.consultarServicios();

  }

  consultarServicios() {
    this.conexion.get("listarServicios", "").subscribe(
      (res: any) => {
        console.log(res);
        if (res.tipo == 1) {
          this.lstServicios = res.resultado.servicios;
          this.consultarRecursosLinea();
        } else {
          alert("Error en el servicio");
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  consultarRecursosLinea() {
    this.conexion.get("listarRecursosLinea", "").subscribe(
      (res: any) => {
        console.log(res);
        if (res.tipo == 1) {
          this.lstRecursos = res.resultado;
        } else {
          alert("Error en el servicio");
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  verificarRecursoLinea(datos) {
    this.router.navigate(['login']);
  }

}
