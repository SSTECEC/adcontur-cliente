import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})

export class ServicioComponent implements OnInit {

  urls: any;
  idServicio = 0;
  dtServicio: any;

  constructor(private conexion: ApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idServicio = parseInt(this.router.snapshot.params.id);
    this.urls = environment;
    this.consultarServicio();
  }

  consultarServicio() {
    this.conexion.get("listarServicio?idServicio=" + this.idServicio, "").subscribe(
      (res: any) => {
        this.dtServicio = res.resultado;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
