import { Component, OnInit,  ViewChild} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartService } from '../service/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  title = 'Bar Chart';
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data:[65, 58, 80, 81, 56, 55, 40], label: 'Series A'},
    {data:[28, 48, 40, 19, 86, 27, 80], label: 'Series B'}
  ]
  lessThenOrGreaterThen: string;
  userName: string;
  Password: string;
  constructor(private cs: ChartService) { }

  ngOnInit() {
    this.cs.Login(this.userName, this.Password)
  }

   applyFilter(value) {
  console.log(this.barChartData[0].data);
  // this.barChartData[0].data = this.chart.data[0];
  // this.chart.datasets[1].data = this.chart.data[1];

  this.chart.data.forEach((data, i) => {
      if (this.lessThenOrGreaterThen === 'GreatThen') {
        this.chart.data[i] = data.data.map(v => {
          if (v >= value) return v;
          else return 0;
        })
      } else {
        this.chart.data[i] = data.data.map(v => {
          if (v <= value) return v;
          else return 0;
        }); 
      }
    });
    this.chart.chart.update();
   }
}
