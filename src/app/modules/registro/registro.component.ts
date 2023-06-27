import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm = new FormGroup({
    Plataforma: new FormControl('Seleccionar'),
    Titulo: new FormControl(''),
  })
}
