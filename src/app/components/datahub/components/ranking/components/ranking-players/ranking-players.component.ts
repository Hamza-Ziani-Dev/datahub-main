import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../service/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ranking-players',
  templateUrl: './ranking-players.component.html',
  styleUrls: ['./ranking-players.component.css']
})
export class RankingPlayersComponent implements OnInit {
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  isLoading: boolean = true;
  pagination = {
    loading: true,
    length: 0,
    pageSize: 25,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
  }
  filters: any = {}
  constructor(
    private rankingService: RankingService
  ) { }

  datasource: any[] = [];
  ngOnInit() {
    this.actions('GET');
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'GET':
        this.rankingService.ListPlayers(this.pagination.pageSize, this.pagination.pageIndex, this.filters = null).subscribe(
          (RES: any) => {
            this.isLoading = false;
            this.datasource = RES;
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
