import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { RankingService } from '../../service/ranking.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ranking-player-resume',
  templateUrl: './ranking-player-resume.component.html',
  styleUrls: ['./ranking-player-resume.component.css']
})
export class RankingPlayerResumeComponent implements OnInit {

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
    private rankingService: RankingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ID = this.route.snapshot.parent?.params.id;
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    console.log(this.ID, this.PLAYER_ID);
    this.actions("GET");
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR":
        const myChart1 = echarts.init(
          document.getElementById("radar-percentilles")
        );
        const option1 = {
          angleAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          radiusAxis: {},
          polar: {},
          series: [
            {
              type: "bar",
              data: [10, 7, 9, 2, 4, 8, 8],
              coordinateSystem: "polar",
              name: "A",
              stack: "a",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              data: [2, 4, 6, 1, 3, 2, 1],
              coordinateSystem: "polar",
              name: "B",
              stack: "a",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              data: [1, 2, 3, 4, 1, 2, 5],
              coordinateSystem: "polar",
              name: "C",
              stack: "a",
              emphasis: {
                focus: "series",
              },
            },
          ],
          legend: {
            show: true,
            data: [],
          },
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
          const myChart3 = echarts.init(document.getElementById('chart-absence'));
         const option3 = {
          series: [
            {
          
              type: 'pie',
              radius: '50%',
              data: [
          
                 { value: 300, name: 'Presence' },
                { value: 30, name: 'Absence' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        myChart3.setOption(option3);
         break;
      case "UPDATE_CHART":
        break;
      case "GET":
        this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = RES;
            this.isLoading = false;
            this.COLORS = RES?.Option?.colors;
            this.chart = {
              title: RES?.Option?.title?.text,
              legend: RES?.Option?.legend?.data,
            };
            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;

            this.actions("CREATE_CHART_RADAR", RES?.Option1);
            this.actions("CREATE_CHART_BAR2", RES?.Option2);
            this.actions("CREATE_CHART_BAR3", RES?.Option3);
            // this.actions("CREATE_CHART_SCATTER1", RES?.Option2);
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        );
        break;
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }
}
