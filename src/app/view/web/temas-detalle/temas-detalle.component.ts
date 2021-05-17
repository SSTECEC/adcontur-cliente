import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-temas-detalle',
  templateUrl: './temas-detalle.component.html',
  styleUrls: ['./temas-detalle.component.css']
})
export class TemasDetalleComponent implements OnInit {

  urls: any;
  idTema = 0;
  dtTema: any;

  constructor(private conexion: ApiService, private router: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.idTema = parseInt(this.router.snapshot.params.id);
    this.urls = environment;
    this.consultarTema();
  }

  consultarTema() {
    this.spinner.show();
    this.conexion.get("listarTemaDetalle?idTema=" + this.idTema, "").subscribe(
      (res: any) => {
        this.spinner.hide();
        console.log(res);
        if (res.tipo == 1) {
          this.dtTema = res.resultado;

          $("#tituloTema").html(this.dtTema.titulo);
          $("#tipoTema").html(this.dtTema.nombre);
          $("#descripcionTema").html(this.dtTema.descripcion);

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

  imprimirTema() {
    $('#imprimible').printThis({
      importCSS: false,
      header: `<table style="width: 100%; font-style: normal; font-weight: bold">
        <tr>
      <td style="text-align: left;">
        Jorge Washington N21-39 y Av Amazonas.<br>
        Edificio Rocafuerte 5to piso Oficina 5S<br>
        Quito - Ecuador
      </td>
      <td style="text-align: right;">
        <img src="assets/images/logo.png" alt="" width="335">
      </td>
    </tr>
    <tr>
  <td colspan="2">
    <br>
  </td>   
</tr>
  </table>`,
      footer: `
      <footer style="position: absolute;
bottom: 0;
width: 100%;">
        <table style="width: 100%; font-style: normal; font-weight: bold">
    <tr>
      <td style="text-align: center;">
        <img src="assets/images/phone.png" alt="" width="15">&nbsp; 2 500 610 <br>
        <img src="assets/images/phone.png" alt="" width="15">&nbsp; 2 500 086 <br>
      </td>
      <td style="text-align: center;">
        <img src="assets/images/wp-card-l.png" alt="" width="15">&nbsp;0 997 607 812
      </td>
      <td style="text-align: center;">
        <img src="assets/images/email.png" alt="" width="15">&nbsp; info@adcontur.com <br>
        Adcontur Acp&nbsp;<img src="assets/images/facebook.png" alt="" width="18">&nbsp;&nbsp;<img src="assets/images/instagram.png" alt="" width="18">
      </td>
    </tr>
  </table>
</footer>`
    });
  }
}
