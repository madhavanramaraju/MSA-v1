import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {FormsModule} from "@angular/forms";
import {ChartService} from './service/chart.service';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsDropdownComponent } from './charts-dropdown/charts-dropdown.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ExportComponent } from './export/export.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    ChartsDropdownComponent,
    MainNavComponent,
    LineChartComponent,
    ScatterChartComponent,
    DataTableComponent,
    StackedBarComponent,
    BubbleChartComponent,
    ExportComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
