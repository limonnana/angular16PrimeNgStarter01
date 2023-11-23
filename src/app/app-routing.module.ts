import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { MainComponent } from './modules/main/main.component';
import { AllUnidadesComponent } from './modules/unidades/all-unidades/all-unidades.component';


const routes: Routes = [

  
  {
  path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent
      
      },
    ]
  },
  {
  path: 'unidades', component: LayoutComponent,
  children: [
    {
       path: 'all-unidades', 
       component: AllUnidadesComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
