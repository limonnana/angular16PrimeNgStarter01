import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { MainComponent } from './modules/main/main.component';
import { AllUnidadesComponent } from './modules/unidades/all-unidades/all-unidades.component';
import { NuevaUnidadComponent } from './modules/unidades/nueva-unidad/nueva-unidad.component';
import { UsersComponent } from './modules/users/users.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { LoginComponent } from './modules/users/login/login.component';


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
  },
  {
    path: 'unidades', component: LayoutComponent,
    children: [
      {
         path: 'nueva-unidad', 
         component: NuevaUnidadComponent
      }
    ]
    },
    {
      path: 'users', component: UsersComponent,
      children: [
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'login',
          component: LoginComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
