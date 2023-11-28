import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CharedService } from 'src/app/services/chared.service';


@Component({
  selector: 'app-database-list-players-post',
  templateUrl: './database-list-players-post.component.html',
  styleUrls: ['./database-list-players-post.component.css']
})
export class DatabaseListPlayersPostComponent implements OnInit {
  @Output() selectedLigueChange = new EventEmitter<string>();
  
  displayedColumns: string[] = ['id', 'equipe', 'age', 'time_play', 'pied', 'taille'];
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  POSTS: any[] = [];
  DATES: any[] = [];
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
    post: [],
    ligue: [],
    annee: [],
  };
  // ID: number = null;
  constructor(
    private rankingService: DatabaseService,
    private charedService: CharedService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    
    this.actions('GET', { filters: null });
    this.rankingService.FiltersListPlayersPost().subscribe(
      (responce: any) => {
        this.DATES = responce.years;
        this.POSTS = responce.posts;
      },
      (error: HttpErrorResponse) => {

      }
    )
  }
  onSelectionChange(event: any) {
    this.selectedLigueChange.emit(event.value);
  }


 
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'GET':
        this.rankingService.ListPlayersPost(this.pagination.pageSize, this.pagination.pageIndex, RES.filters).subscribe(
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
        Object.keys(this.filters).forEach(key => {
          if (key === 'player' && typeof (RES.value) == 'string' && RES.value?.length > 3) {
            this.filters = { ...this.filters, [RES.column]: RES.value };
            status = true;
          } else if (key !== 'player' && RES.value?.length > 0) {
            this.filters = { ...this.filters, [RES.column]: RES.value };
            status = true;

          } else {
            status = false;
          }
        })
        if (RES.column === "post" && RES.value?.length === 1) {
          this.displayedColumns = [...this.displayedColumns, 'indice'];
        } else {
          this.displayedColumns = this.displayedColumns.filter(col => col != 'indice');
        }
        if (status) {
          this.pagination.loading = true;
          this.pagination.pageIndex = 0;
          this.actions('GET', { filters: this.filters });
        } else {
          this.actions('GET', { filters: null });
        }
        break;

      default:
        break;
    }
  }

}
