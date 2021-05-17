import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilitariosService } from 'src/app/metodos/utilitarios/utilitarios.service';
import { ApiService } from 'src/app/servicios/api/api.service';
import { SesionService } from 'src/app/servicios/sesion/sesion.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fmrLogin = {
    Email: '',
    Password: ''
  }

  fmrRegistro = {
    Identificacion: "",
    Usuario: "",
    Email: "",
    Password: "",
    Celular: "",
    Rol: "-1"
  }

  constructor(private conexion: ApiService, private spinner: NgxSpinnerService,
    public generico: UtilitariosService, private router: Router,
    public sesion: SesionService) { }


  ngOnInit(): void {
  }

  public registro() {
    console.log('registro');
    $("#registro").removeClass("slide-up");
    $("#login").addClass("slide-up");
  }

  public inicio() {
    console.log('login');
    $("#login").removeClass("slide-up");
    $("#registro").addClass("slide-up");

  }

  iniciarSesion() {

    if (!this.generico.validarEmail(this.fmrLogin.Email)) {
      this.generico.notificacion("warning", "Ingresar correo electrónico válido");
    } else if (this.fmrLogin.Password == "") {
      this.generico.notificacion("warning", "Ingresar contraseña");
    } else {
      this.spinner.show();
      this.conexion.post("verificarUsuario", "", this.fmrLogin).subscribe(
        (res: any) => {
          this.spinner.hide();
          console.log(res);
          if (res.tipo == 1) {
            if (res.resultado == undefined) {
              this.generico.notificacion("warning", "Credenciales Incorrectas");
            } else {
              this.sesion.iniciarSesion(res.resultado);
            }
          } else {
            this.generico.notificacion("warning", "Error en el servicio");
          }
        },
        err => {
          this.spinner.hide();
          this.generico.notificacion("warning", "Error en el servicio");
          console.log(err);
        }
      );
    }
  }

  Registro() {

    if (this.fmrRegistro.Rol == "-1") {
      this.generico.notificacion("warning", "Seleccionar un rol");
    } else if (this.fmrRegistro.Identificacion == "") {
      this.generico.notificacion("warning", "Ingresar Identificación");
    } else if (this.fmrRegistro.Usuario == "") {
      this.generico.notificacion("warning", "Ingresar Nombre Completo");
    } else if (!this.generico.validarEmail(this.fmrRegistro.Email)) {
      this.generico.notificacion("warning", "Ingresar Email Válido");
    } else if (this.fmrRegistro.Celular == "") {
      this.generico.notificacion("warning", "Ingresar Teléfono");
    } else if (this.fmrRegistro.Rol == "-1") {
      this.generico.notificacion("warning", "Seleccionar un rol");
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(this.fmrRegistro.Password) == false) {
      this.generico.alerta("warning", "Contraseña", 'Ingresar contraseña segura<br><ul style="font-size: 15px; padding-left: 15px !important;"><li>Mínimo 8 caracteres</li><li>Máximo 15 caracteres</li><li>Al menos una letra mayúscula</li><li>Al menos una letra minucula</li><li>Al menos un dígito</li><li>No espacios en blanco</li><li>Al menos 1 caracter especial(-,_,$,!,*,+)</li><li>Ejemplo de Contraseña Segura: P&eff98c</li></ul>');
    } else {
      this.spinner.show();
      this.conexion.post("registrarUsuario", "", this.fmrRegistro).subscribe(
        (res: any) => {
          this.spinner.hide();
          console.log(res);
          if (res.tipo == 1) {
            this.generico.alerta("success", "Éxito", "Registro Exitoso");
            setTimeout(() => {
              location.reload();
            }, 1000);
          } else {
            this.generico.notificacion("warning", "Error en el servicio");
          }
        },
        err => {
          this.spinner.hide();
          this.generico.notificacion("warning", "Error en el servicio");
          console.log(err);
        }
      );
    }
  }




}
