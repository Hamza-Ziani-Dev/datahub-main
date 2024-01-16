import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { RankingService } from '../../service/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharedService } from 'src/app/services/chared.service';

@Component({
  selector: 'app-ranking-profile-player',
  templateUrl: './ranking-profile-player.component.html',
  styleUrls: ['./ranking-profile-player.component.css', '../../../database/components/database-profile-player/database-profile-player.component.css']
})
export class RankingProfilePlayerComponent implements OnInit {
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ['#0357A0', "#007934", "#E55C00"];
  chart: any = {
    title: [],
    legend: []
  };
  playerSub: Subscription;
  PLAYER_ID: number = null;
  dataSource: any[] = [];
  player: any;
  constructor(
    private rankingService: RankingService,
    private sharedService: CharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.params.player_id;
    this.route.params.subscribe(
      p => {
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
        myChart.setOption(RES?.option);
        break;
      case 'UPDATE_CHART':

        break;
      case 'GET':
        this.rankingService.One(this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = {
              ...RES, player: {
                ...RES.player,
                post_label: this.sharedService.getPosts(RES.player?.post).slice(0, 1).shift()?.label
              }
            };

            this.isLoading = false;
            this.COLORS = RES?.charts?.Option?.colors;
            //  delete RES?.Option?.legend;
            this.chart = {
              title: [
                {
                  text: RES?.charts?.Option?.title?.text,
                  left: 'center'
                }
              ],
              legend: RES?.charts?.Option?.legend,
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
              this.actions('CREATE_CHART', { option: RES?.charts?.Option })
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
