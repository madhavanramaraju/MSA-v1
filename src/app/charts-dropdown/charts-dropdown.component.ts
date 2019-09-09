import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charts-dropdown',
  templateUrl: './charts-dropdown.component.html',
  styleUrls: ['./charts-dropdown.component.css']
})
export class ChartsDropdownComponent implements OnInit {

  selectedProduct = 'Bar Chart';
  selectedObj = null;

  chartTypes = [ 
    { title:'Bar Chart', route:'/bar-chart' },
    { title:'Doughnut Chart', route:'/doughnut-chart' },
    { title:'Radar Chart', route:'/radar-chart' },
    { title:'Pie Chart', route:'/pie-chart' },
    { title:'Line Chart', route:'/line-chart' },
    { title:'Scatter Chart', route:'/scatter-chart' },

  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeChartType() {
    for (let i=0; i<this.chartTypes.length; i++) {
      if(this.chartTypes[i].title === this.selectedProduct) {
        this.selectedObj = this.chartTypes[i];
      }
    };
    console.log(this.selectedObj);
    this.router.navigate([this.selectedObj.route]);
  }
}
