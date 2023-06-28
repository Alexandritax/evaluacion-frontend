import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Reporte } from 'src/app/interfaces/reporte';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  reportes: any;

  async ngOnInit() {
    this.apiService.getReportes().subscribe({
      next: (resp) => {
        this.reportes = resp;
      },
      error: (err) => {
        this.reportes = [];
        console.log(err);
      }
    });
  }

  Columns: string[] = ['id', 'videojuego', 'plataforma'];

}
