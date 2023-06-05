import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChartComponent } from './chart/chart.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listagem',
    component: ListagemComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'update/:id',
    component: CadastroComponent
  }
  ,
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'apexchart',
    component: ApexChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
