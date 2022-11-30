import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListaPeticionesDataSource, ListaPeticionesItem } from './lista-peticiones-datasource';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.css']
})
export class ListaPeticionesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListaPeticionesItem>;
  dataSource: ListaPeticionesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(
    private authService: AuthService
  ) {
    this.dataSource = new ListaPeticionesDataSource()
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ngOnInit(): void {
    this.authService.ObtenerPeticiones()
    .subscribe(
      res => {
        console.log(res)
      },
      err=> console.log(err)
    )
  }
}
