import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { GroupDescriptor, DataResult, process, State, SortDescriptor, orderBy } from '@progress/kendo-data-query';

import { environment } from 'src/environments/environment';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  urls: any;
  lstTemasInteres = [];
  lstTipoTemas = [];

  public groups: GroupDescriptor[] = [{ field: 'Mes' }];
  public sort: SortDescriptor[] = [
    {
      field: 'Mes',
      dir: 'desc'
    }
  ];

  public state: State = {
    skip: 0,
    take: 5,
    sort: this.sort,
    group: this.groups
  };

  public gridView: GridDataResult = process(this.lstTemasInteres, this.state);


  constructor(private conexion: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.urls = environment;
    this.consultarCantidadTemasTipo();
    this.consultarTemasInteres();
  }

  consultarCantidadTemasTipo() {
    this.conexion.get("listarCantidadTemasTipo", "").subscribe(
      (res: any) => {
        this.lstTipoTemas = res.resultado;
      },
      err => {
        console.log(err);
      }
    );
  }

  consultarTemasInteres() {
    this.conexion.get("listarTemas", "").subscribe(
      (res: any) => {
        this.lstTemasInteres = res.resultado;
        this.gridView = process(this.lstTemasInteres, this.state);
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  public groupChange(groups: GroupDescriptor[]): void {
    console.log("group");
    this.groups = groups;
    this.consultarTemasInteres();
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    console.log("data");
    this.state = state;
    this.gridView = process(this.lstTemasInteres, this.state);

  }

  public sortChange(sort: SortDescriptor[]): void {
    console.log("sort");
    this.sort = sort;
    this.gridView = {
      data: orderBy(this.lstTemasInteres, this.sort),
      total: this.lstTemasInteres.length
    };
  }

  detalleTema(detalle) {
    this.router.navigate(['/tema/detalle/' + detalle.idTema]);
    console.log(detalle);
  }
}
