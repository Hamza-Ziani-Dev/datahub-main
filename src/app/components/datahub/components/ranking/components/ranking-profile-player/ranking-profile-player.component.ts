import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { RankingService } from '../../service/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking-profile-player',
  templateUrl: './ranking-profile-player.component.html',
  styleUrls: ['./ranking-profile-player.component.css']
})
export class RankingProfilePlayerComponent implements OnInit {
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
    this.ID = this.route.snapshot.params.id;
    this.PLAYER_ID = this.route.snapshot.params.player_id;
    this.route.params.subscribe(
      p => {
        if (this.ID != p.id) {
          this.ID = p.id;
        }
        if (this.PLAYER_ID != p.player_id) {
          this.PLAYER_ID = p.player_id;
        }
      }
    );
    this.actions1('GET');
    this.actions2('GET');
  }

  actions1(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'CREATE_CHART':
        const myChart1 = echarts.init(document.getElementById('radar-chart'));
        const option = RES ? RES :{
          angleAxis: {
            type: 'category',
            data: []
          },
          radiusAxis: {},
          polar: {},
          series: [
            {
              type: 'bar',
              data: [],
              coordinateSystem: 'polar',
              name: 'A',
              stack: 'a',
              emphasis: {
                focus: 'series'
              }
            },
            {
              type: 'bar',
              data: [],
              coordinateSystem: 'polar',
              name: 'B',
              stack: 'a',
              emphasis: {
                focus: 'series'
              }
            },
            {
              type: 'bar',
              data: [],
              coordinateSystem: 'polar',
              name: 'C',
              stack: 'a',
              emphasis: {
                focus: 'series'
              }
            }
          ],
          legend: {
            show: true,
            data: ['A', 'B', 'C']
          }
        };

        myChart1.setOption(option);
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

            this.actions1('CREATE_CHART', RES?.Option)
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
  actions2(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'CREATE_CHART':
        const myChart2 = echarts.init(document.getElementById('chart-presence'));
        const option = RES ? RES :  {
          title: {
            text: 'Weather Statistics',
            subtext: 'Fake Data',
            left: 'center'
          },
          legend: {
            bottom: 10,
            left: 'center',
            data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
          },
          series: [
            {
              type: 'pie',
              radius: '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: [
                {
                  value: 1548,
                  name: 'CityE',
                  label: {
                    rich: {
                      title: {
                        color: '#eee',
                        align: 'center'
                      },
                      abg: {
                        backgroundColor: '#333',
                        width: '100%',
                        align: 'right',
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: 'left',
                      },
                      Cloudy: {
                        height: 30,
                        align: 'left',
                      },
                      Showers: {
                        height: 30,
                        align: 'left',
                      },
                      weatherHead: {
                        color: '#333',
                        height: 24,
                        align: 'left'
                      },
                      hr: {
                        borderColor: '#777',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'left'
                      },
                      valueHead: {
                        color: '#333',
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'center'
                      },
                      rate: {
                        width: 40,
                        align: 'right',
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: '#333',
                        width: 40,
                        align: 'center',
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                },
                { value: 735, name: 'CityC' },
                { value: 510, name: 'CityD' },
                { value: 434, name: 'CityB' },
                { value: 335, name: 'CityA' }
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

        myChart2.setOption(option);
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
            // lineStyle: {
            //   color: '#000', // Set line color for the check value
            // },
            // itemStyle: {
            //   color: '#000', // Set item (symbol) color for the check value
            // },
            // console.log(this.chart);
            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;

            this.actions2('CREATE_CHART', RES?.Option)
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
