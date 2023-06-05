import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListagemComponent } from '../pages/listagem/listagem.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    ListagemComponent,
    PaginationComponent
  ],
  exports: [
    ListagemComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PaginationModule { }
