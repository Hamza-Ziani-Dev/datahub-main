import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../service/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  ID: number = null;
  chart: any = {
    title: null,
    legend: [],
  };
  PLAYER_ID: number = null;
  dataSource: any[] = [];
  constructor(
    private TeamService: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ID = this.route.snapshot.parent?.params.id;
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    console.log(this.ID, this.PLAYER_ID);
    this.actions("CREATE_CHART_RADAR1");
    this.actions("CREATE_CHART_RADAR2");
    this.actions("CREATE_CHART_RADAR3");
    this.actions("CREATE_CHART_SCATTER1");
    this.actions("CREATE_CHART_SCATTER2");
    this.actions("CREATE_CHART_SCATTER3");
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        const myChart1 = echarts.init(document.getElementById("chart-offensive"));
        const option1 ={
          legend: {
            data: ['RSB Berkane', 'Moyenne de ligne']
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: 'Buts', max: 6500 },
              { name: 'XContre', max: 16000 },
              { name: 'Tirs', max: 30000 },
              { name: 'Tirs cadre', max: 38000 },
              { name: 'Contre Prise', max: 52000 },
              { name: 'Passes Complete', max: 25000 },
              { name: 'Duels Offensive ', max: 25000 }
            ],
            radius: 85,
            center: ['42%', '60%'],
          },
          series: [
            {
              type: 'radar',
              areaStyle: {},
              // itemStyle: {
              //   color:"#E55C00",
              // },
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000,],
                  name: 'RSB Berkane',
                   itemStyle: {
                     color:"#E55C00",
                     },
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,],
                  name: 'Moyenne de ligne',
                  itemStyle: {
                    color:"#fbb034",
                    },
                }
              ]
            }
          ]
        }
        myChart1.setOption(option1);
      break;
      case "CREATE_CHART_RADAR2":
        const myChart2 = echarts.init(document.getElementById("chart-deffensive"));
        const option2 ={
          legend: {
            data: ['RSB Berkane', 'Moyenne de ligne']
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: 'Buts', max: 6500 },
              { name: 'XContre', max: 16000 },
              { name: 'Tirs', max: 30000 },
              { name: 'Tirs cadre', max: 38000 },
              { name: 'Contre Prise', max: 52000 },
              { name: 'Passes Complete', max: 25000 },
              { name: 'Duels Offensive ', max: 25000 }
            ],
            radius: 85,
            center: ['42%', '60%'],
          },
          series: [
            {
              type: 'radar',
              areaStyle: {},
           
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000,],
                  name: 'RSB Berkane',
                  itemStyle: {
                    color:"#E55C00",
                    },
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,],
                  name: 'Moyenne de ligne',
                  itemStyle: {
                    color:"#fbb034",
                    },
                }
              ]
            }
          ]
        }
        myChart2.setOption(option2);
      break;
      case "CREATE_CHART_RADAR3":
        const myChart3 = echarts.init(document.getElementById("chart-generale"));
        const option3 ={
          legend: {
            data: ['RSB Berkane', 'Moyenne de ligne']
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: 'Buts', max: 6500 },
              { name: 'XContre', max: 16000 },
              { name: 'Tirs', max: 30000 },
              { name: 'Tirs cadre', max: 38000 },
              { name: 'Contre Prise', max: 52000 },
              { name: 'Passes Complete', max: 25000 },
              { name: 'Duels Offensive ', max: 25000 }
            ],
            radius: 85,
            center: ['42%', '60%'],
          },
          series: [
            {
              type: 'radar',
              areaStyle: {},
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000,],
                  name: 'RSB Berkane',
                  itemStyle: {
                    color:"#E55C00",
                    },
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,],
                  name: 'Moyenne de ligne',
                  itemStyle: {
                    color:"#fbb034",
                    },
                }
              ]
            }
          ]
        }
        myChart3.setOption(option3);
      break;
      case "CREATE_CHART_SCATTER1":
        const myChart4 = echarts.init(document.getElementById("chart-efficacite"));
        const option4 = {
          xAxis: {},
          yAxis: {},
          title:{
            text: 'Aerial Duel Win Ration %',
            bottom: 5,
            left: 'center'
          },
          series: [
            {
              data:  [
                {
                   value: [1, 64,'Berkan'],
                  name: 'Berkan'
                },
                 {
                  value: [10, 56],
                  name: 'RCA'
                },
                 {
                  value: [20, 44],
                  name: 'WAC'
                },
                 {
                  value: [2, 22],
                  name: 'KAC'
                },
                 {
                  value: [1, 33],
                  name: 'RSB'
                },
                 {
                  value: [1, 10],
                  name: 'MAS'
                },

              ],
              type: 'scatter',
              name:"Title",
              stack: 'Total',
              symbol: 'circle',
              symbolSize: 25,
              // itemStyle: {
              //   color:"#7ac143",
              // },
              emphasis: {
                focus: 'self'
              },
              labelLayout: {
          
              },
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
             
            }
          ]
        };
        myChart4.setOption(option4);
      break;
      case "CREATE_CHART_SCATTER2":
        const myChart5 = echarts.init(document.getElementById("chart-passes"));
        const option5 = {
          xAxis: {},
        yAxis: {},
        title:{
          text: 'Aerial Duel Win Ration %',
          bottom: 5,
          left: 'center'
        },
        series: [
          {
            data: [
                      {
                         value: [1, 10,'Berkan'],
                        name: 'Berkan'
                      },
                       {
                        value: [3, 56],
                        name: 'RCA'
                      },
                       {
                        value: [5, 40],
                        name: 'WAC'
                      },
                       {
                        value: [1, 54],
                        name: 'KAC'
                      },
                       {
                        value: [1, 33],
                        name: 'RSB'
                      },
                       {
                        value: [1, 23],
                        name: 'MAS'
                      },
                      
      
                    ],
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 25,
            emphasis: {
              focus: 'self'
            },
            // labelLayout: {
        
            // },
            labelLine: {
              show: true,
              // length2: 10,
              // lineStyle: {
              //   color: ''
              // }
            },
           
          }
        ]
        }
        myChart5.setOption(option5);
      break;
      case "CREATE_CHART_SCATTER3":
        const myChart6 = echarts.init(document.getElementById("chart-duels"));
        const option6 = {
          xAxis: {},
          yAxis: {},
          title:{
            text: 'Aerial Duel Win Ration %',
            bottom: 5,
            left: 'center'
          },
          series: [
            {
              data:  [
                {
                   value: [1, 64,'Berkan'],
                  name: 'Berkan'
                },
                 {
                  value: [10, 56],
                  name: 'RCA'
                },
                 {
                  value: [20, 44],
                  name: 'WAC'
                },
                 {
                  value: [2, 22],
                  name: 'KAC'
                },
                 {
                  value: [1, 33],
                  name: 'RSB'
                },
                 {
                  value: [1, 10],
                  name: 'MAS'
                },
                

              ],
              type: 'scatter',
              symbol: 'circle',
              symbolSize: 25,
              emphasis: {
                focus: 'self'
              },
              labelLayout: {
          
              },
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
             
            }
          ]
        };
        myChart6.setOption(option6);
      break;
        

      case "UPDATE_CHART":
        break;
      // case "GET":
      //   this.TeamService.One(this.ID, this.PLAYER_ID).subscribe(
      //     (RES: any) => {
      //       this.dataSource = RES;
      //       this.isLoading = false;
      //       this.COLORS = RES?.Option?.colors;
      //       this.chart = {
      //         title: RES?.Option?.title?.text,
      //         legend: RES?.Option?.legend?.data,
      //       };
      //       delete RES?.Option?.title?.text;
      //       delete RES?.Option?.legend;

      //       this.actions("CREATE_CHART_RADAR1", RES?.Option1);
      //     },
      //     (ERROR: HttpErrorResponse) => {
      //       this.isLoading = false;
      //     }
      //   );
      // break;
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }

}
