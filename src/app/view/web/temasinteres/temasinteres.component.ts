import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-temasinteres',
  templateUrl: './temasinteres.component.html',
  styleUrls: ['./temasinteres.component.css']
})
export class TemasinteresComponent implements OnInit {
  urls: any;
  lstTemasInteres = [];
  constructor(private conexion: ApiService) { }

  ngOnInit(): void {
    this.urls = environment;
    this.consultarTemasInteres();
  }

  consultarTemasInteres(){
    this.conexion.get("test", "").subscribe(
      (res: any) => {
        this.lstTemasInteres = res.temas;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
