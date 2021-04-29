import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
    $(document).ready(function () {

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

    });
  }

  ngOnInit(): void {
  }

}
