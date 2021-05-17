import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilitariosService } from 'src/app/metodos/utilitarios/utilitarios.service';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})

export class ServicioComponent implements OnInit {

  urls: any;
  idServicio = 0;
  dtServicio: any;
  fmrConsulta = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    servicio: ""
  };

  constructor(private conexion: ApiService, private router: ActivatedRoute,
    public generico: UtilitariosService, public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.idServicio = parseInt(this.router.snapshot.params.id);
    this.urls = environment;
    this.consultarServicio();
  }

  consultarServicio() {
    this.spinner.show();
    this.conexion.get("listarServicio?idServicio=" + this.idServicio, "").subscribe(
      (res: any) => {
        this.spinner.hide();
        this.dtServicio = res.resultado;
        console.log(res);
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }

  contactar() {
  
    this.fmrConsulta.servicio = this.dtServicio?.titulo;

    this.spinner.show();
    this.conexion.post("enviarEmailContactame", "", this.fmrConsulta).subscribe(
      (res: any) => {
        this.spinner.hide();
        console.log(res);
        this.limpiar();
        this.generico.alerta("success", "Consulta", "Se ha enviado exitosamente la solicitud.");
      },
      err => {
        this.spinner.hide();
        this.generico.alerta("warning", "Consulta", "Ocurrió un eror al enviar la solicitud, intentelo mas tarde.");
        console.log(err);
      }
    );
  }

  limpiar(){
    this.fmrConsulta = {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      servicio: ""
    };
  }


}
