import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../service/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CharedService } from 'src/app/services/chared.service';

@Component({
  selector: 'app-ranking-players',
  templateUrl: './ranking-players.component.html',
  styleUrls: ['./ranking-players.component.css']
})
export class RankingPlayersComponent implements OnInit {
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  isLoading: boolean = true;
  CATEGORIES: any[] = [];
  categorie = 'Seniors';
  pagination = {
    loading: true,
    length: 0,
    pageSize: 25,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
  }

  constructor(
    private rankingService: RankingService,
    private charedService: CharedService
  ) { }

  datasource: any[] = [];
  ngOnInit() {
    this.actions('GET');
    this.rankingService.FiltersListPlayers().subscribe(
      (responce: any) => {
        this.CATEGORIES = responce?.categories;
      },
      (error: HttpErrorResponse) => { }
    )
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'GET':
        this.isLoading = true;
        this.rankingService.ListPlayers(this.pagination.pageSize, this.pagination.pageIndex, { categorie: this.categorie }).subscribe(
          (RES: any) => {
            this.datasource = RES;
            this.isLoading = false;
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        )
        break;
      case 'DO_FILTER':
        let status = false;

        this.categorie = RES.value;
        if (status) {
          this.pagination.loading = true;
          this.pagination.pageIndex = 0;
          this.actions('GET', { categorie: this.categorie });
        } else {
          this.actions('GET', {
            categorie: this.categorie ?? 'Seniors',
          });
        }
        break;

      default:
        break;
    }
  }
}
