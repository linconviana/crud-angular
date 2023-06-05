import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  /// :: https://www.youtube.com/watch?v=VaQI0Oo-XzY
  /// :: https://www.chartjs.org/docs/latest/getting-started/installation.html
  /// :: npm install chart.js --save

  @ViewChild('myChart', {static: true}) ctx: ElementRef;
  @ViewChild('myChartBar', {static: true}) ctxBar: ElementRef;
  @ViewChild('myChartPie', {static: true}) ctxPie: ElementRef;
  @ViewChild('myChartPolar', {static: true}) ctxPolar: ElementRef;

  ngOnInit(): void {

    new Chart(this.ctx.nativeElement, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#00AEFF',
            borderWidth: 1
          },
          {
            label: '# of Votes',
            data: [9, 25, 6, 3, 1, 5],
            borderColor: '#00AE00',
            borderWidth: 1
          },
          {
            label: '# of Votes',
            data: [7, 22, 4, 3, 3, 4],
            borderWidth: 1
          }
        ]
      }
    });


    new Chart(this.ctxBar.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Cores',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(this.ctxPie.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }      
        ]
      }
    });

    new Chart(this.ctxPolar.nativeElement, {
      type: 'polarArea',
      data: {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
          }     
        ]
      }
    });

  }
}
