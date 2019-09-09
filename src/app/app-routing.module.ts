import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { TableBasicFlexExampleComponent } from './table-basic-flex-example/table-basic-flex-example.component';



const routes: Routes = [
  {path: 'bar-chart', component:BarChartComponent},
  {path: 'doughnut-chart', component:DoughnutChartComponent},
  {path: 'radar-chart', component:RadarChartComponent},
  {path: 'pie-chart', component:PieChartComponent},
  {path: 'line-chart', component:LineChartComponent},
  {path: 'scatter-chart', component:ScatterChartComponent},
  {path: '**', component:TableBasicFlexExampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
