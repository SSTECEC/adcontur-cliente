import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-float',
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.css']
})
export class FloatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.iniciarWhatsapp();
  }

  public iniciarWhatsapp(){
    $("#detalleWp").css({ "display": "none" });
        $("#btnWp").css({ "display": "block" });
        $("#btnWpClose").css({ "display": "none" });

        $("#btnWp").click(function () {
            $("#detalleWp").css({ "display": "block" });
            $("#btnWp").css({ "display": "none" });
            $("#btnWpClose").css({ "display": "block" });
        });

        $("#btnWpClose").click(function () {
            $("#detalleWp").css({ "display": "none" });
            $("#btnWp").css({ "display": "block" });
            $("#btnWpClose").css({ "display": "none" });
        });
  }

}
