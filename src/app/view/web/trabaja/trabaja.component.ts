import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilitariosService } from 'src/app/metodos/utilitarios/utilitarios.service';
import { ApiService } from 'src/app/servicios/api/api.service';

declare var $: any;

@Component({
  selector: 'app-trabaja',
  templateUrl: './trabaja.component.html',
  styleUrls: ['./trabaja.component.css']
})
export class TrabajaComponent implements OnInit {

  public frmTrabajo: any = {
    identificacion: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
    conocimientos: '',
    experiencia: '',
    salario: '',
    disponibilidad: '',
    cargo: '',
    file: ''
  }

  curriculum: any;

  constructor(public generico: UtilitariosService, public conexion: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  public obtenerCurriculum(ev) {
    this.curriculum = ev.target;
  }

  public enviar() {

    this.frmTrabajo.conocimientos = $('input[name="conocimientos"]:checked').val();
    this.frmTrabajo.experiencia = $('input[name="experiencia"]:checked').val();
    this.frmTrabajo.disponibilidad = $('input[name="disponibilidad"]:checked').val();
    this.frmTrabajo.cargo = $('input[name="cargo"]:checked').val();

    console.log('Enviar', this.frmTrabajo.conocimientos);
    if (this.frmTrabajo.identificacion == null || this.frmTrabajo.identificacion == undefined || this.frmTrabajo.identificacion == '' || this.frmTrabajo.identificacion.length != 10) {
      this.generico.notificacion("warning", "Ingresar un N°.Identificación");
    } else if (this.frmTrabajo.nombre == null || this.frmTrabajo.nombre == undefined || this.frmTrabajo.nombre == '') {
      this.generico.notificacion("warning", "Ingresar un nombre completo");
    } else if (this.frmTrabajo.email == null || this.frmTrabajo.email == undefined || this.frmTrabajo.email == '') {
      this.generico.notificacion("warning", "Ingresar un email válido");
    } else if (!this.generico.validarEmail(this.frmTrabajo.email)) {
      this.generico.notificacion("warning", "Ingresar un email válido");
    } else if (this.frmTrabajo.telefono == null || this.frmTrabajo.telefono == undefined || this.frmTrabajo.telefono == '' || this.frmTrabajo.telefono.length != 10) {
      this.generico.notificacion("warning", "Ingresar un teléfono móvil");
    } else if (this.frmTrabajo.direccion == null || this.frmTrabajo.direccion == undefined || this.frmTrabajo.direccion == '') {
      this.generico.notificacion("warning", "Ingresar una dirección domiciliaria");
    } else if (this.frmTrabajo.conocimientos == null || this.frmTrabajo.conocimientos == undefined || this.frmTrabajo.conocimientos == '') {
      this.generico.notificacion("warning", "Seleccionar Conocimientos de Niifs");
    } else if (this.frmTrabajo.experiencia == null || this.frmTrabajo.experiencia == undefined || this.frmTrabajo.experiencia == '') {
      this.generico.notificacion("warning", "Seleccionar Años de Experiencia");
    } else if (this.frmTrabajo.salario == null || this.frmTrabajo.salario == undefined || this.frmTrabajo.salario == '') {
      this.generico.notificacion("warning", "Ingresar su aspiración salarial");
    } else if (this.frmTrabajo.disponibilidad == null || this.frmTrabajo.disponibilidad == undefined || this.frmTrabajo.disponibilidad == '') {
      this.generico.notificacion("warning", "Seleccionar Cuenta con Disponibilidad Inmediata");
    } else if (this.frmTrabajo.cargo == null || this.frmTrabajo.cargo == undefined || this.frmTrabajo.cargo == '') {
      this.generico.notificacion("warning", "Seleccionar Cargo para el que aplica");
    } else if (this.frmTrabajo.file == null || this.frmTrabajo.file == undefined || this.frmTrabajo.file == '') {
      this.generico.notificacion("warning", "Ingresar Currículum");
    } else {
      if (this.curriculum.files.length > 0) {

        let form = new FormData();
        form.append('identificacion', this.frmTrabajo.identificacion);
        form.append('nombre', this.frmTrabajo.nombre);
        form.append('email', this.frmTrabajo.email);
        form.append('direccion', this.frmTrabajo.direccion);
        form.append('telefono', this.frmTrabajo.telefono);
        form.append('conocimientos', this.frmTrabajo.conocimientos);
        form.append('experiencia', this.frmTrabajo.experiencia);
        form.append('salario', this.frmTrabajo.salario);
        form.append('disponibilidad', this.frmTrabajo.disponibilidad);
        form.append('cargo', this.frmTrabajo.cargo);
        form.append('file', this.curriculum.files[0]);
        this.spinner.show();
        this.conexion.upload("enviarEmailCurriculum", form).subscribe(
          (res: any) => {
            console.log(res);
            this.spinner.hide();
            this.generico.alerta("success", "Curriculum", "Se ha enviado exitosamente la solicitud de trabajo.");
            setTimeout(() => {
              location.reload();
            }, 1000);
          },
          err => {
            this.spinner.hide();
            this.generico.alerta("warning", "Curriculum", "Ocurrió un eror al enviar la solicitud, intentelo mas tarde.");
            console.log(err);
          }
        );
      }else{
        this.generico.notificacion("warning", "Ingresar Currículum");
      }

    }
  }



}
