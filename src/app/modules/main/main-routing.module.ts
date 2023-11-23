import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        { path: '', component: MainComponent }
        
      ],
    },
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
  })
  export class MainRoutingModule { }