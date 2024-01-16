import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../service/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CharedService } from 'src/app/services/chared.service';
import { LocalPagination, Pagination } from '../../../database/components/database-list-players-post/database-list-players-post.component';
import { Subscription } from 'rxjs';
import { UpdatePhysiqueComponent } from 'src/app/components/datahub/dialogs/update-physique/update-physique.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/interface/user.model';
import { authService } from 'src/app/components/auth/service/auth.service';



@Component({
  selector: 'app-ranking-list-players-post',
  templateUrl: './ranking-list-players-post.component.html',
  styleUrls: ['./ranking-list-players-post.component.css']
})
export class RankingListPlayersPostComponent implements OnInit {
  displayedColumns: string[] = ['id', 'equipe', 'age', 'time_play', 'pied', 'taille'];
  dataSource: any[] = [];
  DATES: any[] = [];
  CLUBS: any[] = [];
  isLoading: boolean = true;
  pagination: Pagination = {
    loading: true,
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
  }
  user: User;
  filters: any = {
    player: null,
    clubs: [],
    annee: []
  };
  clearLocalStorage: Subscription;
  POST: string | null = null;
  CATEGORY: string | null = null;
  localStorageKey: string = 'datahub-ranking-post';
  constructor(
    private dialog: MatDialog,
    private authService: authService,
    private rankingService: RankingService,
    private charedService: CharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.POST = this.route.snapshot.params.id;
    this.CATEGORY = this.route.snapshot.params.category;
    this.route.params.subscribe(
      p => {
        if (this.POST != p.id) {
          this.POST = p.id;
        }
        if (this.CATEGORY != p.category) {
          this.CATEGORY = p.category;
        }
      }
    );
    this.authService.getUpdatedUser()
      .subscribe(
        (user: User) => {
          if (user) {
            this.user = user;
          }
        })
    this.authService.getUser();

    const localPaginationJson = localStorage.getItem(this.localStorageKey);
    const localPagination: LocalPagination = localPaginationJson ? JSON.parse(localPaginationJson) : null;

    if (localPagination?.filters) {
      this.pagination = localPagination.pagination;

      Object.keys(this.filters).forEach((key) => {
        if (localPagination.filters.hasOwnProperty(key)) {
          this.filters[key] = localPagination.filters[key];
        }
      });

      this.filters = localPagination.filters;
    } else {
      this.pagination = {
        ...this.pagination,
        pageSize: this.pagination.pageSize,
        pageIndex: this.pagination.pageIndex
      };
    }

    this.actions('GET', { filters: this.filters });
    this.rankingService.FiltersListPlayersPost(this.POST, this.CATEGORY).subscribe(
      (responce: any) => {
        this.DATES = responce?.years;
        this.CLUBS = responce?.clubs;
        this.actions('FILTER_CLUB_BY_CAREGORY');
      },
      (error: HttpErrorResponse) => { }
    )
  }
  actions(CASE: string, RES: any = null) {
    let dialogRef;
    switch (CASE) {
      case 'GET':
        this.dataSource = [];
        this.isLoading = true;
        this.rankingService.ListPlayersPost(this.POST, this.CATEGORY, this.pagination.pageSize, this.pagination.pageIndex, RES.filters).subscribe(
          (response: any) => {
            this.isLoading = false;
            this.dataSource = response.players;
            this.pagination.pageSize = response.limit;
            this.pagination.length = response.length;
            this.pagination.pageIndex = response.page;
            this.pagination.loading = false;
            localStorage.setItem(
              this.localStorageKey,
              JSON.stringify({
                pagination: this.pagination,
                filters: this.filters
              })
            );
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
        if (status) {
          this.pagination.loading = true;
          this.pagination.pageIndex = 0;
          this.actions('GET', { filters: this.filters });
        } else {
          this.actions('GET', { filters: null });
        }
        break
      case 'CLEAR_LOCALSTORAGE':
        this.pagination.loading = true;
        this.clearLocalStorage = this.charedService
          .ClearLocalStorage([this.localStorageKey])
          .subscribe((responce: boolean) => {
            if (responce) {
              this.pagination = {
                loading: true,
                length: 0,
                pageSize: 10,
                pageIndex: 0,
                pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
              }
              this.filters = {
                player: null,
                categorie: 'Seniors',
                post: 'all',
                ligue: 'LNFP_M',
                sexe: null,
                clubs: [],
                annee: []
              };
              this.actions('GET', { filters: { ...this.filters, ligue: ['LNFP_M', 'LNFF_F'].includes(this.filters?.ligue) ? this.filters?.ligue?.split('_')[1]?.toLowerCase() : 'o' } });
            }
          })
        break
      case 'UPDATE_PHYSIQUE':
        dialogRef = this.dialog.open(UpdatePhysiqueComponent, {
          minWidth: '450px',
          data: {
            title: `Ajouter ${RES?.type === 'height' ? 'Taille' : 'Poids'}`,
            value: null,
            type: RES?.type,
            playerId: RES?.playerId
          }
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          if (![false, null, undefined].includes(result)) {
            this.isLoading = true;
            const data = [
              {
                value: result?.value,
                type: result?.type === 'height' ? 'taille' : 'poids'
              }
            ]
            this.rankingService.InsertPhysiqueTest(result?.playerId, data).subscribe(
              (response: boolean) => {
                if (response) this.dataSource = this.dataSource.map(e => Object(e.id == result?.playerId ? {
                  ...e, physique: { ...e.physique, [result.type]: `${result.value} ${result?.type === 'height' ? 'cm' : 'kg'}` }
                } : e))
                this.isLoading = false;
              },
              (ERROR: HttpErrorResponse) => {
                this.isLoading = false;
              }
            )
          }
        })
        break
      default:
        break;
    }
  }

}
