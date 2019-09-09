import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  title = 'Radar Chart';
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartType = 'radar';
  public radarChartData = [
    {data:[65, 58, 80, 81], label: '2017'},
    {data:[28, 48, 40, 19], label: '2018'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
