import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modules/registro/registro.component';
import { ReporteComponent } from './modules/reporte/reporte.component';

const routes: Routes = [
  {
    path:'', component: RegistroComponent
  },
  {
    path:'reporte', component: ReporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
