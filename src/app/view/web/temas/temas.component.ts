import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  urls: any;
  lstTemasInteres = [];
  constructor(private conexion: ApiService) { }

  ngOnInit(): void {
    this.urls = environment;
    this.consultarTemasInteres();
  }

  consultarTemasInteres(){
    this.conexion.get("listasTemas", "").subscribe(
      (res: any) => {
        this.lstTemasInteres = res.resultado;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
