import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { RankingService } from '../../service/ranking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking-player-medicale',
  templateUrl: './ranking-player-medicale.component.html',
  styleUrls: ['./ranking-player-medicale.component.css']
})
export class RankingPlayerMedicaleComponent implements OnInit {

 
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
      case 'CREATE_CHART_BIO1':
        const myChart = echarts.init(document.getElementById('chart-biometrie1'));
        const option1 = {
          title: {
            text: 'Taille CM',
          },
          xAxis: {
            data: ['Nov.2022', 'Dec.2022', 'Jun.2023', 'Fer.2023', 'Mar.2023', 'Avr.2023', 'Mai.2023']
          },
          yAxis: {
            type: 'value',
            show :false,
          },
          label: {
            show: true,
            position: 'top'
          },
          series: [
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [160.5, 180.0, 185.0, 190, 165.5, 170.5, 167.5]
            }
          ]
        };
        myChart.setOption(option1);
      break;
      case 'CREATE_CHART_BIO2':
          const myChart2 = echarts.init(document.getElementById('chart-biometrie2'));
          const option2 = {
            title: {
              text: 'Poits (KG)',
            },
            xAxis: {
              data: ['Nov.2022', 'Dec.2022', 'Jun.2023', 'Fer.2023', 'Mar.2023', 'Avr.2023', 'Mai.2023']
            },
            yAxis: {
              type: 'value',
              show :false,
            },
            label: {
              show: true,
              position: 'top'
            },
            series: [
              {
                name: 'poits',
                type: 'line',
                stack: 'Total',
                data: [60.5, 80.0, 75.0, 65.0, 75.5, 70.5, 88.5]
              }
            ]
          };
          myChart2.setOption(option2);
          break;
      case 'CREATE_CHART_BIO3':
            const myChart3 = echarts.init(document.getElementById('chart-biometrie3'));
            const option3 = {
              title: {
                text: 'Masse Grasse DEXA(%)',
              },
              xAxis: {
                data: ['Nov.2022', 'Dec.2022', 'Jun.2023', 'Fer.2023', 'Mar.2023', 'Avr.2023', 'Mai.2023']
              },
              yAxis: {
                type: 'value',
                show :false,
              },
              label: {
                show: true,
                position: 'top'
              },
              series: [
                {
                  name: 'Masse Grasse',
                  type: 'line',
                  stack: 'Total',
                  data: [16, 17.0, 15.0, 19, 18.5, 17.5, 14.5]
                }
              ]
            };
            myChart3.setOption(option3);
      break;
      case 'CREATE_CHART_BIO4':
            const myChart4 = echarts.init(document.getElementById('chart-biometrie4'));
            const option4 = {
              title: {
                text: 'Taille CM',
              },
              xAxis: {
                data: ['Nov.2022', 'Dec.2022', 'Jun.2023', 'Fer.2023', 'Mar.2023', 'Avr.2023', 'Mai.2023']
              },
              yAxis: {
                type: 'value',
                show :false,
              },
              label: {
                show: true,
                position: 'top'
              },
              series: [
                {
                  name: 'Search Engine',
                  type: 'line',
                  stack: 'Total',
                  data: [40.5, 50, 60.0, 40, 20, 70.5, 80]
                }
              ]
            };
            myChart4.setOption(option4);
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

            this.actions('CREATE_CHART_BIO1', RES?.Option)
            this.actions('CREATE_CHART_BIO2', RES?.Option)
            this.actions('CREATE_CHART_BIO3', RES?.Option)
            this.actions('CREATE_CHART_BIO4', RES?.Option)
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
