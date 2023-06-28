import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Plataforma } from '../interfaces/plataforma';
import { Reporte, Reportes } from '../interfaces/reporte';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URL = environment.backendUrl;

  getPlataformas() {
    const url = this.API_URL + '/plataforma';
    console.log(url)
    return this.http.get<Plataforma[]>(url);
  }

  getReportes() {
    const url = this.API_URL + '/reporte';
    return this.http.get<Reportes[]>(url);
  }

  postReporte(reporte: Reporte) {
    const url = this.API_URL + '/reporte';
    return this.http.post<Reporte>(url, reporte);
  }
}
