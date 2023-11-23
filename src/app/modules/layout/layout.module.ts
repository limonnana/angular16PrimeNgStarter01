import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent
   
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent
    
  ]  
})
export class LayoutModule { }
