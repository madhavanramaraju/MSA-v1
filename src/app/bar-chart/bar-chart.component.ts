import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
