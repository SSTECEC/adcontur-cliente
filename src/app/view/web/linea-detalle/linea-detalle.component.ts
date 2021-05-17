import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilitariosService } from 'src/app/metodos/utilitarios/utilitarios.service';
import { ApiService } from 'src/app/servicios/api/api.service';
import { SesionService } from 'src/app/servicios/sesion/sesion.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-linea-detalle',
  templateUrl: './linea-detalle.component.html',
  styleUrls: ['./linea-detalle.component.css']
})
export class LineaDetalleComponent implements OnInit {

  urls: any;
  idLinea = 0;


  //1
  ruc = "";
  dtCatastro: any;

  //Paneles
  paneles = {
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false,
    panel6: false
  }

  constructor(private conexion: ApiService, private router: ActivatedRoute,
    private spinner: NgxSpinnerService, public generico: UtilitariosService,
    public sesion: SesionService) { }

  ngOnInit(): void {
    this.idLinea = parseInt(this.router.snapshot.params.id);
    this.urls = environment;

    this.seleccionRecurso();
    this.verificarSesion();
  }

  verificarSesion() {
    return this.sesion.verificarCredencialesRutas();
  }

  seleccionRecurso() {
    if (this.idLinea == 1) {
      this.paneles.panel1 = true;
    } else if (this.idLinea == 2) {
      this.paneles.panel2 = true;
    } else if (this.idLinea == 3) {
      this.paneles.panel3 = true;
    } else if (this.idLinea == 4) {
      this.paneles.panel4 = true;
    } else if (this.idLinea == 5) {
      this.paneles.panel5 = true;
    } else if (this.idLinea == 6) {
      this.paneles.panel6 = true;
    }
  }

  consultarCatastro() {

    if (this.validacion()) {
      //listarDatosRuc
      this.spinner.show();
      this.conexion.get("listarDatosRuc?ruc=" + this.ruc, "").subscribe(
        (res: any) => {
          this.spinner.hide();

          if (res.tipo == 1) {

            var datos = JSON.parse(res.resultado);
            this.dtCatastro = datos;
            console.log(this.dtCatastro);

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

  }

  public validacion() {
    if (this.ruc == "" || this.ruc == null || this.ruc.length != 13) {
      alert("Ingresar un numero de ruc válido");
      return false;
    }
    return true;
  }

}
