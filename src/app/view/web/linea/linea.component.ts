import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {

  lstRecursos = [];
  constructor(private conexion: ApiService) { }

  ngOnInit(): void {
    this.consultarRecursosLinea();
  }

  
  consultarRecursosLinea() {
    this.conexion.get("listarRecursosLinea", "").subscribe(
      (res: any) => {
        console.log(res);
        if (res.tipo == 1) {
          this.lstRecursos = res.resultado;
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
