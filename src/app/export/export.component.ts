import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as PptxGenJS  from 'pptxgenjs-angular';
import domtoimage from 'dom-to-image';
import canvasToImage from 'canvas-to-image';

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
  sampleImgEl = null;

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
        this.sampleImgEl = 'linechart';
        break;
      case '/data-table':  
        this.sampleData = tableData;
        this.sampleImgEl = document.getElementById('tableView')
        break; 
      case '/bar-chart': 
        this.sampleData = STATISTICS;
        this.sampleImgEl = 'barchart';
        break;
      case '/scatter-chart': 
        this.sampleData = TEMPERATURES;
        this.sampleImgEl = 'scatteredchart';
        break;
      case '/pie-chart':
      case '/doughnut-chart':
        this.sampleData = POPULATION;
        this.sampleImgEl = 'piechart';
        break;
      case '/stacked-chart':
        this.sampleData = SP500;
        this.sampleImgEl = 'stackedchart';
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

    if(this.router.url === '/data-table') {
      domtoimage.toPng(this.sampleImgEl)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          slide.addImage({ data: img.src, x:1, y:1, w:8.0, h:4.0 });
          pptx.save();
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
    }
    else {
      let canvas = <HTMLCanvasElement> document.getElementById(this.sampleImgEl);
      let image = new Image();
      image.src = canvas.toDataURL("image/png");
      slide.addImage({ data: image.src, x:1, y:1, w:8.0, h:4.0 });
      pptx.save();
    }
  }
}
