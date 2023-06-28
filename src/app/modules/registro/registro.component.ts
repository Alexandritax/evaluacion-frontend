import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {

  constructor(private apiService: ApiService,
    private fb: FormBuilder) { }

  registroForm: FormGroup = this.fb.group({
    Plataforma: [0],
    Videojuego: ["", [Validators.required]],
  })

  isZero = this.registroForm.value.Plataforma == 0;
  plataformas: any;
  
  Submit() { 
    if(!this.isZero)
    {
      const reporte = {
        plataforma_id: this.registroForm.value.Plataforma,
        videojuego: this.registroForm.value.Videojuego,
      }
      this.apiService.postReporte(reporte).subscribe({
          next: (resp) => {
            console.log(resp);
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
    }
    else{
      console.error("No se ha seleccionado una plataforma")
    }
   }


  async ngOnInit() {
    this.apiService.getPlataformas().subscribe({
      next: (resp) => {
        this.plataformas = resp;
      },
      error: (err) => {
        this.plataformas = [];
        console.log(err);
      }
    });
  }
  
}

