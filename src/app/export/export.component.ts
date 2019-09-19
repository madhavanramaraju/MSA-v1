import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as PptxGenJS  from 'pptxgenjs-angular';

import { ExportToCsv } from 'export-to-csv';
import { ExportExcelService } from '../service/export-excel.service'

import { tableData } from '../shared/table'
import { LINECHART } from '../shared/linechart';
import { STATISTICS } from '../shared/statistics';
import { TEMPERATURES } from '../shared/temperatures';
import { POPULATION } from '../shared/population';
import { SP500 } from '../shared/sp500';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  filename = 'demo.csv'
  sampleData = [];
  sampleImage;
  options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: '',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  constructor(public router: Router, private excelService: ExportExcelService) { }

  ngOnInit() {
  }

  public getData() {
    switch(this.router.url) { 
      case '/line-chart': 
        this.sampleData = LINECHART;
        break;
      case '/table-view':  
        this.sampleData = tableData;
        break; 
      case '/bar-chart': 
        this.sampleData = STATISTICS;
        let canvas = <HTMLCanvasElement> document.getElementById('barchart');
        let image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;    
        break;
      case '/scatter-chart': 
        this.sampleData = TEMPERATURES;
        break;
      case '/pie-chart':
      case '/doughnut-chart':
        this.sampleData = POPULATION;
        break;
      case '/stacked-chart':
        this.sampleData = SP500;
        break;
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

  exportFileAsCsv() {
    this.getData();
    const csvExporter = new ExportToCsv(this.options);
    csvExporter.generateCsv(this.sampleData);
  }

  exportFileAsExcel() {
    this.getData();
    this.excelService.exportAsExcelFile(this.sampleData, 'excelFile');
  }

  exportFileAsPptx() {
    let image = this.getData();
    var pptx = new PptxGenJS();
    var slide = pptx.addNewSlide();


// EX: Image from remote URL
slide.addImage({ data:image, x:1, y:1, w:6, h:4 })

pptx.save('Demo-Images');
    // var pptx = new PptxGenJS();
    // var slide = pptx.addNewSlide();

    //   // Chart Type: LINE
    //   var dataChartAreaLine = [
    //     {
    //       name  : 'Actual Sales',
    //       labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    //       values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121]
    //     },
    //     {
    //       name  : 'Projected Sales',
    //       labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    //       values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121]
    //     }
    //   ];
    //   slide.addChart( pptx.charts.LINE, dataChartAreaLine, { x:1.0, y:1.0, w:12, h:6 } );
   
    //   pptx.save('Demo-Line-Chart');
    // // var pptx = new PptxGenJS();
    // // var slide = pptx.addNewSlide();
    // // slide.addText('Hello World!', { x:1.5, y:1.5, fontSize:18, color:'363636' });
    // // pptx.save('Sample Presentation');
  }
}
