import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesRoutingModule } from './unidades-routing.module';
import { AllUnidadesComponent } from './all-unidades/all-unidades.component';
import { NuevaUnidadComponent } from './nueva-unidad/nueva-unidad.component';



@NgModule({
  declarations: [
    NuevaUnidadComponent,
    AllUnidadesComponent
  ],
  imports: [
    CommonModule,
    UnidadesRoutingModule
  ]
})
export class UnidadesModule { }
