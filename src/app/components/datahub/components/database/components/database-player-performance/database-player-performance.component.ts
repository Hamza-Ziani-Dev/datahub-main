import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { ActivatedRoute } from '@angular/router';
import * as echarts from 'echarts';
import { CharedService } from 'src/app/services/chared.service';


@Component({
  selector: 'app-database-player-performance',
  templateUrl: './database-player-performance.component.html',
  styleUrls: ['./database-player-performance.component.css']
})
export class DatabasePlayerPerformanceComponent implements OnInit {
  colors: any[] = [
    { "className": "inferieurs", "color": "#ed1c24" },
    { "className": "energetique", "color": "#1769ff" },
    { "className": "qualites", "color": "#efdf00" },
    { "className": "vitesse", "color": "#7ac143" },
    { "className": "inferieurs", "color": "#ffaaaa" },
    { "className": "inferieurs", "color": "#ed1c24" },
    { "className": "energetique", "color": "#1769ff" },
    { "className": "qualites", "color": "#efdf00" },
    { "className": "vitesse", "color": "#7ac143" },
    { "className": "inferieurs", "color": "#ffaaaa" },
  ]
  class_chart = 'col-md-8';
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ['#0357A0', "#007934", "#E55C00"];
  chart: any = {
    title: null,
    legend: []
  };
  ID: number = null;
  PLAYER_ID: number = null;
  playerSub: []
  dataSource: any[] = [];
  physiqueTests = [];
  playerTestsPhysiques = [];
  isLoadingTest: boolean = true;
  constructor(
    private rankingService: DatabaseService,
    private charedService: CharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    this.ID = this.route.snapshot.parent?.params.id;
    this.actions('GET');
    this.rankingService.getGpsPlayer(this.PLAYER_ID).subscribe(
      (RES: any) => {
        this.class_chart = RES.duration.data.length > 12 ? 'col-md-12' : 'col-md-8';
        setTimeout(() => {
          this.actions('CREATE_CHART_BAR1', RES.distance);
          this.actions('CREATE_CHART_BAR2', RES.duration);
          this.actions('CREATE_CHART_BAR3', { max_speed: RES.max_speed, speed_event: RES.speed_event });
          this.actions('CREATE_CHART_BAR4', RES.acceleration_deceleration);
        }, 50)
      }
    )
    this.rankingService.getTestPhysiqueByPlayer(this.PLAYER_ID).subscribe(
      (result: any) => {
        this.dataSource = result.reduce((accumulator, currentValue) => {
          const testIndex = accumulator.findIndex(element => element.id === currentValue.testId);

          if (testIndex >= 0) {
            accumulator[testIndex].children.push(currentValue);
          } else {
            const testBody = {
              id: currentValue.testId,
              name: currentValue.testName,
              children: [currentValue]
            };
            accumulator.push(testBody);
          }

          return accumulator;
        }, this.dataSource);
        this.isLoadingTest = false;
        setTimeout(() => {
          this.actions('CREATE_CHART_RADAR', this.dataSource);
        }, 300);
      }
    );
    this.rankingService.getPlayerPhysiqueTestDatabase(this.PLAYER_ID).subscribe(
      (result: any) => {
        this.playerTestsPhysiques = result;
        console.log(this.playerTestsPhysiques);
      })
  }
  getPlayerTests(id) {
    let data = this.playerTestsPhysiques.filter((element: any) => element.childTestId == id);
    if (data.length > 0) {
      data = data.sort((a, b) => { return (new Date(b.date)).getTime() - (new Date(a.date)).getTime(); });
      return data[0].value;
    }
    return '0';
  }
  // getDataVissite() {
  //   this.playerService.getOnePlayerGps(this.PLAYER_ID).subscribe(

  //   );
  // }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'CREATE_CHART_BAR1':
        console.log("RES", RES);
        const myChart1 = echarts.init(document.getElementById('chart-distance'));
        const option1 = {
          title: [
            {
              left: 'center',
              text: RES.name || 'Distance Total',
            },
          ],
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
              data: RES.data.map(e => e.adversaire),
              axisLabel: { interval: 0, rotate: 30 },
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              axisLabel: {
                formatter: '{value} m'
              }
            },
            // {
            //   type: 'value',
            //   name: 'Temperature',
            //   min: 0,
            //   max: 25,
            //   interval: 5,
            //   axisLabel: {
            //     formatter: '{value} km'
            //   }
            // }
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              // tooltip: {
              //   valueFormatter: function (value) {
              //     return value + ' km';
              //   }
              // },
              data: RES.data.map(e => +e.value),
            },
            // {
            //   name: 'Temperature',
            //   type: 'line',
            //   yAxisIndex: 1,
            //   tooltip: {
            //     valueFormatter: function (value) {
            //       return value + ' km';
            //     }
            //   },
            //   data: RES.map(e => +e.value),
            // }
          ]
        };
        myChart1.setOption(option1);
        break;
      case 'CREATE_CHART_BAR2':
        const myChart2 = echarts.init(document.getElementById('chart-temps'));
        const DATA = RES.data.map(e => Object({ label: e.adversaire, value: this.charedService.timeStringToFloat(e.value) }))
        const option2 = {
          title: [
            {
              left: 'center',
              text: RES.name || 'Temps de Jeu',
            },
          ],
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
              axisLabel: { interval: 0, rotate: 30 },
              data: DATA.map(e => e.label),
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              axisLabel: {
                formatter: '{value} min'
              }
            },
          ],
          series: [
            {
              type: 'bar',

              data: DATA.map(e => e.value),
            },
          ]
        };

        myChart2.setOption(option2);
        break;
      case 'CREATE_CHART_BAR3':
        const myChart3 = echarts.init(document.getElementById('chart-speed'));
        const option3 = {
          title: [
            {
              left: 'center',
              text: `${RES.speed_event.name} / ${RES.max_speed.name}` || 'Speed Event /Max Speed',
            },
          ],
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
              type: 'value',
              axisLabel: {
                formatter: '{value} km/h'
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              min: 0,
              axisLabel: {
                formatter: ''
              }
            },
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
              data: RES.speed_event.data.map(e => +e.value),
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
              data: RES.max_speed.data.map(e => +e.value)
            },
            // {
            //   name: 'Expenses',
            //   type: 'bar',
            //   stack: 'Total',
            //   label: {
            //     show: true,
            //     position: 'left'
            //   },
            //   emphasis: {
            //     focus: 'series'
            //   },
            //   data: [-120, -132, -101, -134, -190, -230, -210]
            // }
          ]
        };
        myChart3.setOption(option3);
        break;
      case 'CREATE_CHART_BAR4':
        const myChart4 = echarts.init(document.getElementById('chart-accelerations'));
        const option4 = {
          title: [
            {
              left: 'center',
              text: RES.name || 'Accelerations / Decelerations',
            },
          ],
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
            data: RES.data.map(e => e.acceleration_adversaire || e.e.acceleration_adversaire)
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
              data: RES.data.map(e => e.acceleration_value),
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
              data: RES.data.map(e => e.deceleration_value),
            },
          ]
        };
        myChart4.setOption(option4);
        break;

      case 'CREATE_CHART_RADAR':
        let myChart5, option5;
        RES.forEach((chart, i) => {
          myChart5 = echarts.init(document.getElementById(`radar-${this.colors[i]?.className}_${i}`));
          option5 = {
            radar: {
              indicator: chart.children.map(val => Object({
                name: val?.name, min: 0
              })),
              // axisLabel: {
              //   show: true,
              //   interval: 1 // Set the interval to display every label
              // }
            },

            series: [
              {
                itemStyle: {
                  color: this.colors[i]?.color ?? '#000'
                },
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                  {
                    value: chart.children.map(val => Number(this.getPlayerTests(val?.id))) // Example values for each indicator
                  },
                ]
              }
            ]
          };
          myChart5.setOption(option5);
        })
        break;
      case 'GET':
        this.rankingService.TabOne('player-performance', this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.isLoading = false;
            this.COLORS = RES?.Option?.colors;
            this.chart = {
              title: RES?.Option?.title?.text,
              legend: RES?.Option?.legend?.data
            }
            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        )
        break;
      default:
        break;
    }
  }
}
