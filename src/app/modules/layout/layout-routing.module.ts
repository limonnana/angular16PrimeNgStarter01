
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { AllUnidadesComponent } from '../unidades/all-unidades/all-unidades.component';
import { NuevaUnidadComponent } from '../unidades/nueva-unidad/nueva-unidad.component';


const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    loadChildren: () => import('../main/main.module').then((m) => m.MainModule),
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', redirectTo: 'main' }
    ],
  },
  {
    path: 'all-unidades',
    component: AllUnidadesComponent
  },
  {
    path: 'nueva-unidad',
    component: NuevaUnidadComponent
  },
  {
  path: '**', redirectTo: 'all-unidades' 
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
