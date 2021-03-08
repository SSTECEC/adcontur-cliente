import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public keyCliente = "ka-session";

  constructor() { }

  ngOnInit(): void {
    this.verificarCredencialesHeader();
    $("#menu-movil").css("display", "none");
    $("#menu-servicios").css("display", "none");
    $("#menu-linea").css("display", "none");
  }

  public verificarCredencialesHeader() {
    var datos = localStorage.getItem(this.keyCliente);
    if (datos != null) {
      var bytes = atob(datos);
      var datosPlanos = JSON.parse(bytes);
      $("#divUsuarioSesion").css("display", "");
      $("#lblUsuarioSesion").empty();
      $("#lblUsuarioSesion").html(datosPlanos.Usuario);
    } else {
      $("#divUsuarioSesion").css("display", "none");
    }
  }

  public cerrarSesion() {
    localStorage.removeItem(this.keyCliente);
    location.href = "/"
  }

  public menu() {
    var estado = $('#menu-movil').css('display');
    if (estado == "none") {
      $("#menu-movil").css("display", "block");
    } else {
      $("#menu-movil").css("display", "none");
    }
    console.log(estado);
  }

  public servicios() {
    var estado = $('#menu-servicios').css('display');
    if (estado == "none") {
      $("#menu-servicios").css("display", "block");
    } else {
      $("#menu-servicios").css("display", "none");
    }
    console.log(estado);
  }

  public linea() {
    var estado = $('#menu-linea').css('display');
    if (estado == "none") {
      $("#menu-linea").css("display", "block");
    } else {
      $("#menu-linea").css("display", "none");
    }
    console.log(estado);
  }

}
