import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-web',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urls: any;
  lstServicios = [];
  constructor(private conexion: ApiService) { }

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
        } else {
          alert("Error en el servicio");
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
