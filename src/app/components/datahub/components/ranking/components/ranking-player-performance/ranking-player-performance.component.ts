import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../service/ranking.service';
import { ActivatedRoute } from '@angular/router';
import * as echarts from 'echarts';


@Component({
  selector: 'app-ranking-player-performance',
  templateUrl: './ranking-player-performance.component.html',
  styleUrls: ['./ranking-player-performance.component.css']
})
export class RankingPlayerPerformanceComponent implements OnInit {

  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ['#0357A0', "#007934", "#E55C00"];
  ID: number = null;
  chart: any = {
    title: null,
    legend: []
  };
  PLAYER_ID: number = null;
  dataSource: any[] = [];
  constructor(
    private rankingService: RankingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ID = this.route.snapshot.parent?.params.id;
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
     console.log(
      this.ID,
      this.PLAYER_ID
     )
    this.actions('GET');
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'CREATE_CHART_BAR1':
        const myChart1 = echarts.init(document.getElementById('chart-distance'));
        const option1 =  {
          title: {
            text: 'Distance Total', 
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Precipitation',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: 'Temperature',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' ml';
                }
              },
              data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
              ]
            },
            {
              name: 'Temperature',
              type: 'line',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' °C';
                }
              },
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        };
        myChart1.setOption(option1);
        break;
      case 'CREATE_CHART_BAR2'  :
        const myChart2 = echarts.init(document.getElementById('chart-temps'));
        const option2 = {
          title: {
            text: 'Temps de Jeu', 
          },
          dataset: [
            {
              dimensions: ['name', 'age', 'profession', 'score', 'date'],
              source: [
                ['2001', 41, 'Engineer', 314, '2011-02-12'],
                ['2004', 20, 'Teacher', 351, '2011-03-01'],
                ['2007 ', 52, 'Musician', 287, '2011-02-14'],
                ['2009', 37, 'Teacher', 219, '2011-02-18'],
                ['2001', 25, 'Engineer', 253, '2011-04-02'],
                ['2016', 19, 'Teacher', '-', '2011-01-16'],
                ['2019', 71, 'Engineer', 165, '2011-03-19'],
                ['2022', 36, 'Musician', 318, '2011-02-24'],
                ['2023', 67, 'Engineer', 366, '2011-03-12']
              ]
            },
            {
              transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' }
              }
            }
          ],
          xAxis: {
            type: 'category',
            axisLabel: { interval: 0, rotate: 30 }
          },
          yAxis: {},
          series: {
            type: 'bar',
            encode: { x: 'name', y: 'score' },
            datasetIndex: 1
          }
        };
        myChart2.setOption(option2);
       break;
      case 'CREATE_CHART_BAR3': 
       const myChart3 = echarts.init(document.getElementById('chart-speed'));
       const option3 = {
        title: {
          text: 'Speed Event /Max Speed', 
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
          }
        ],
        series: [
          {
            name: 'Profit',
            type: 'bar',
            label: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              focus: 'series'
            },
            data: [200, 170, 240, 244, 200, 220, 210]
          },
          {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 341, 374, 390, 450, 420]
          },
          {
            name: 'Expenses',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'left'
            },
            emphasis: {
              focus: 'series'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      };
       myChart3.setOption(option3);
       break;
      case 'CREATE_CHART_BAR4':
        const myChart4 = echarts.init(document.getElementById('chart-accelerations'));
        const option4 = {
          title: {
            text: 'Accelerations / Decelerations', 
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['Rca', 'WAC', 'FAR', 'KAC', 'DHJ', 'MAT', 'RSB']
          },
          series: [
            {
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        myChart4.setOption(option4);
       break;

      case 'CREATE_CHART_RADAR1':
        const myChart5 = echarts.init(document.getElementById('radar-vitesse'));
       const option5 = {
          radar: {
            indicator: [
              { name: 'm', max: 10 }, // Hide label '0' for the first indicator
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 }
            ],
            axisLabel: {
              show: true,
              interval: 1 // Set the interval to display every label
            }
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: [4, 3, 2, 5, 7, 1, 8, 6, 9, 10], // Example values for each indicator
                },
              ]
            }
          ]
       };
       myChart5.setOption(option5);
       break;
       case 'CREATE_CHART_RADAR2':
        const myChart6 = echarts.init(document.getElementById('radar-qualites'));
        const option6 = {
          radar: {
            indicator: [
              { name: 'm', max: 10 }, // Hide label '0' for the first indicator
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 }
            ],
            axisLabel: {
              show: true,
              interval: 1, // Set the interval to display every label
            },
           
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: [4, 3, 2, 5, 7, 1, 8, 6, 9, 10], // Example values for each indicator
                },
              ]
            }
          ]
       };
       myChart6.setOption(option6);
       break;
       case 'CREATE_CHART_RADAR3':
        const myChart7 = echarts.init(document.getElementById('radar-energetique'));
        const option7 = {
          radar: {
            indicator: [
              { name: 'm', max: 10 }, // Hide label '0' for the first indicator
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 }
            ],
            axisLabel: {
              show: true,
              interval: 1 // Set the interval to display every label
            }
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: [4, 3, 2, 5, 7, 1, 8, 6, 9, 10], // Example values for each indicator
                },
              ]
            }
          ]
       };
       myChart7.setOption(option7);
       break;
       case 'CREATE_CHART_RADAR4':
        const myChart8 = echarts.init(document.getElementById('radar-fn-inferieurs'));
        const option8 = {
          radar: {
            indicator: [
              { name: 'm', max: 10 }, // Hide label '0' for the first indicator
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 },
              { name: 'm', max: 10 }
            ],
            axisLabel: {
              show: true,
              interval: 1 // Set the interval to display every label
            }
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: [4, 3, 2, 5, 7, 1, 8, 6, 9, 10], // Example values for each indicator
                },
              ]
            }
          ]
       };
       myChart8.setOption(option8);
       break;

      case 'UPDATE_CHART':

      break;
      case 'GET':
        this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = RES;
            this.isLoading = false;
            this.COLORS = RES?.Option?.colors;
            this.chart = {
              title: RES?.Option?.title?.text,
              legend: RES?.Option?.legend?.data
            }
            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;

            this.actions('CREATE_CHART_BAR1', RES?.Option)
            this.actions('CREATE_CHART_BAR2', RES?.Option)
            this.actions('CREATE_CHART_BAR3', RES?.Option)
            this.actions('CREATE_CHART_BAR4', RES?.Option)
            this.actions('CREATE_CHART_RADAR1', RES?.Option)
            this.actions('CREATE_CHART_RADAR2', RES?.Option)
            this.actions('CREATE_CHART_RADAR3', RES?.Option)
            this.actions('CREATE_CHART_RADAR4', RES?.Option)
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        )
        break;
      case 'DO_FILTER':

        break;

      default:
        break;
    }
  }
}
