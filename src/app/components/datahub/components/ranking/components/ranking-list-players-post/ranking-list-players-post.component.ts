import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../service/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ranking-list-players-post',
  templateUrl: './ranking-list-players-post.component.html',
  styleUrls: ['./ranking-list-players-post.component.css']
})
export class RankingListPlayersPostComponent implements OnInit {
  displayedColumns: string[] = ['id', 'equipe', 'age', 'time_play', 'pied', 'taille', 'indice'];
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  dataSource: any[] = [];
  isLoading: boolean = true;
  pagination = {
    loading: true,
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
  }
  filters: any = {
    player: null,
    post:null
  };
  ID: number = null;
  constructor(
    private rankingService: RankingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ID = this.route.snapshot.params.id;
    this.route.params.subscribe(
      p => {
        if (this.ID != p.id) {
          this.ID = p.id;
        }
      }
    );
    this.actions('GET', { filters: null });
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'GET':
        this.rankingService.ListPlayersPost(this.ID, this.pagination.pageSize, this.pagination.pageIndex, RES.filters).subscribe(
          (response: any) => {
            this.isLoading = false;
            this.dataSource = response.players;
            this.pagination.pageSize = response.limit;
            this.pagination.length = response.length;
            this.pagination.pageIndex = response.page;
            this.pagination.loading = false;
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        )
        break;
      case 'IS_PAGINATED':
        this.pagination.loading = true;
        this.pagination.pageSize = RES.pageSize;
        this.pagination.length = RES.length;
        this.pagination.pageIndex = RES.pageIndex;
        this.actions('GET', { filters: this.filters });
        break
      case 'DO_FILTERS':
        let status = false;
        if (typeof (RES.value) == 'string' && RES.value?.length > 3) {
          this.filters = { ...this.filters, [RES.column]: RES.value };
          status = true;
        }
        if (status) {
          this.pagination.loading = true;
          this.pagination.pageIndex = 0;
          console.log("filters", this.filters);
          this.actions('GET', { filters: this.filters });
        } else {
          this.actions('GET', { filters: null });
        }
        break

      default:
        break;
    }
  }

}
