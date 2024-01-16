import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharedService } from 'src/app/services/chared.service';

@Component({
  selector: 'app-database-profile-player',
  templateUrl: './database-profile-player.component.html',
  styleUrls: ['./database-profile-player.component.css', '../../database.component.css']
})
export class DatabaseProfilePlayerComponent implements OnInit {
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ['#0357A0', "#007934", "#E55C00"];
  chart: any = {
    title: null,
    legend: []
  };
  PLAYER_ID: number | null = null;
  LIGUE: string | null = null;
  playerSub: Subscription;
  dataSource: any[] = [];
  constructor(
    private sharedService: CharedService,
    public rankingService: DatabaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.params.player_id;
    this.LIGUE = this.route.snapshot.params.ligue;
    this.route.params.subscribe(
      p => {
        if (this.PLAYER_ID != p.player_id) {
          this.PLAYER_ID = p.player_id;
        }
        if (this.LIGUE != p.ligue) {
          this.LIGUE = p.ligue;
        }
      }
    );
    this.actions('GET');

  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
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
      case 'DO_FILTER':

        break;

      default:
        break;
    }
  }
  getAge(dt1) {
    dt1 = new Date(dt1);
    var dt2 = new Date();
    var diffYear = (dt2.getTime() - dt1.getTime()) / 1000;
    diffYear /= (60 * 60 * 24);
    return Math.abs(Math.round(diffYear / 365.25));
  }
}
