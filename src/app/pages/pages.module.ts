import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListagemComponent } from './listagem/listagem.component';
import { RoutingModule } from './routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SearchComponent } from '../shared/search/search.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { ChartComponent } from './chart/chart.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    HomeComponent,
    ListagemComponent,
    CadastroComponent,
    SearchComponent,
    PaginationComponent,
    ChartComponent,
    ApexChartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoutingModule,
    NgApexchartsModule
  ]
})
export class PagesModule { }
