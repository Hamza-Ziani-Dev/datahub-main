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
    title: [],
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
    this.actions('GET');
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'CREATE_CHART':
        const myChart = echarts.init(document.getElementById('radar-chart'));
        const option = RES ? RES : {

          radar: {
            // shape: 'circle',
            indicator: []
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: []
            }
          ]
        };

        myChart.setOption(option);
        break;
      case 'UPDATE_CHART':

        break;
      case 'GET':
        this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = RES;
            console.log("this.dataSource", this.dataSource);
            this.isLoading = false;
            this.COLORS = RES?.Option?.colors;
            //  delete RES?.Option?.legend;
            this.chart = {
              title: [
                {
                  text: RES?.Option?.title?.text,
                  left: 'center',
                }

              ],
              legend: RES?.Option?.legend,
            }

            // lineStyle: {
            //   color: '#000', // Set line color for the check value
            // },
            // itemStyle: {
            //   color: '#000', // Set item (symbol) color for the check value
            // },
            // console.log(this.chart);
            //  delete RES?.Option?.title?.text;

            setTimeout(() => {
              this.actions('CREATE_CHART', {
                ...RES?.Option, legend: { bottom: '0%', right: 'center' }, title: [
                  {
                    text: RES?.Option?.title?.text,
                    left: 'center',
                  }

                ]
              })
            }, 200);
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
