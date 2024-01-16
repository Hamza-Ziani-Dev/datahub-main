import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CharedService } from 'src/app/services/chared.service';
import { Subscription } from 'rxjs';
import { UpdatePhysiqueComponent } from '../../../../dialogs/update-physique/update-physique.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/interface/user.model';
import { authService } from 'src/app/components/auth/service/auth.service';

export interface localPagination {
  filters: { [key: string]: string },
  pagination: Pagination
}

export interface Pagination {
  loading: boolean;
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[];
}
export interface LocalPagination {
  pagination: {
    loading: boolean;
    length: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
  };
  filters: Record<string, any>; // Update this based on the actual type/interface for filters
}


@Component({
  selector: 'app-database-list-players-post',
  templateUrl: './database-list-players-post.component.html',
  styleUrls: ['./database-list-players-post.component.css', '../../database.component.css']
})
export class DatabaseListPlayersPostComponent implements OnInit {
  displayedColumns: string[] = ['id', 'equipe', 'age', 'time_play', 'pied', 'taille'];
  POSTS: any[] = [];
  DATES: any[] = [];
  LIGUES: any[] = [];
  CLUBS: any[] = [];
  CLUBS_DEFAULT: any[] = [];
  CATEGORIES: any[] = [];
  dataSource: any[] = [];
  LIGUE: string | null = null;
  clearLocalStorage: Subscription;
  isLoading: boolean = true;
  user: User;
  pagination: Pagination = {
    loading: true,
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
  }

  filters: any = {
    player: null,
    categorie: 'Seniors',
    post: 'all',
    ligue: 'LNFP_M',
    sexe: null,
    clubs: [],
    annee: []
  };
  localStorageKey: string = 'datahub-database';
  // ID: number = null;
  constructor(
    private dialog: MatDialog,
    public rankingService: DatabaseService,
    public authService: authService,
    private charedService: CharedService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.LIGUE = this.route.snapshot.params.ligue;
    this.LIGUES = this.rankingService.LOGOS
    // this.CATEGORIES = this.charedService.getAgeCategories();
    this.route.params.subscribe(
      p => {
        if (this.LIGUE != p.ligue) {
          this.LIGUE = p.ligue;
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
      this.pagination = { ...this.pagination, ...localPagination.pagination };
      Object.keys(this.filters).forEach((key) => {
        if (localPagination.filters.hasOwnProperty(key)) {
          this.filters[key] = localPagination.filters[key];
        }
      });

      console.log(90);
      this.filters = localPagination.filters;
    } else {
      console.log(30);
      this.pagination = {
        ...this.pagination,
        pageSize: this.pagination?.pageSize ? this.pagination?.pageSize : 10,
        pageIndex: this.pagination?.pageIndex ? this.pagination?.pageIndex : 0
      };
    }
    console.log(this.pagination);

    this.actions('DISPLAY_INDICE');
    this.actions('GET', { filters: { ...this.filters, ligue: ['LNFP_M', 'LNFF_F'].includes(this.filters?.ligue) ? this.filters?.ligue?.split('_')[1]?.toLowerCase() : 'o' } });
    this.actions('GET_FILTERS');
  }
  actions(CASE: string, RES: any = null): void {
    let dialogRef;
    switch (CASE) {
      case 'GET':
        this.isLoading = true;
        this.dataSource = [];
        this.rankingService.ListPlayersPost(this.pagination.pageSize, this.pagination.pageIndex, RES.filters).subscribe(
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
        this.actions('GET', { filters: { ...this.filters, ligue: ['LNFP_M', 'LNFF_F'].includes(this.filters?.ligue) ? this.filters?.ligue?.split('_')[1]?.toLowerCase() : 'o' } });
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
        this.actions('FILTER_CLUB_BY_CAREGORY');
        this.actions('DISPLAY_INDICE');
        // if (
        //   (RES.column === "post" && this.filters.categorie === 'Seniors') ||
        //   (RES.column === "categorie" && RES.value === 'Seniors') ||
        //   (this.filters.categorie === 'Seniors' && this.filters.categorie !== 'all') ||
        //   (this.filters.categorie === 'Seniors' && this.filters.post !== 'all')
        // ) {
        //   this.displayedColumns = this.displayedColumns.includes('indice') ? this.displayedColumns : [...this.displayedColumns, 'indice'];
        // } else {
        //   this.displayedColumns = this.displayedColumns.filter(col => col != 'indice');
        // }
        if (status) {
          this.pagination.loading = true;
          this.pagination.pageIndex = 0;
          this.actions('GET', { filters: { ...this.filters, ligue: ['LNFP_M', 'LNFF_F'].includes(this.filters?.ligue) ? this.filters?.ligue?.split('_')[1]?.toLowerCase() : 'o' } });
        } else {
          this.actions('GET', {
            filters: {
              player: null,
              categorie: this.filters?.categorie ?? 'Seniors',
              post: [],
              clubs: [],
              ligue: ['LNFP_M', 'LNFF_F'].includes(this.filters?.ligue) ? this.filters?.ligue?.split('_')[1]?.toLowerCase() : 'o' ?? 'm',
              sexe: null,
              annee: []
            }
          });
        }
        break
      case 'DISPLAY_INDICE':
        if (
          this.filters.categorie === 'Seniors' && this.filters.post !== 'all'
        ) {
          this.displayedColumns = this.displayedColumns.includes('indice') ? this.displayedColumns : [...this.displayedColumns, 'indice'];
        } else {
          this.displayedColumns = this.displayedColumns.filter(col => col != 'indice');
        }
        break
      case 'GET_FILTERS':
        this.rankingService.FiltersListPlayersPost().subscribe(
          (responce: any) => {
            this.DATES = responce?.years;
            this.CLUBS_DEFAULT = responce?.clubs;
            this.actions('FILTER_CLUB_BY_CAREGORY');
            this.POSTS = responce?.posts;
          },
          (error: HttpErrorResponse) => {

          }
        )
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
      case 'FILTER_CLUB_BY_CAREGORY':
        const _sexe = this.filters?.ligue?.split('_')[1]?.toLowerCase();
        this.CLUBS = this.CLUBS_DEFAULT.filter(e => e.categorie === this.filters.categorie && e.sexe === _sexe);
        this.CATEGORIES = JSON.parse(JSON.stringify([... new Set(this.CLUBS_DEFAULT.filter(e => e.sexe === _sexe).map(({ categorie }) => categorie))].sort((a, b) => Number(a.replace('U', '')) - Number(b.replace('U', '')))));
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
  ngOnDestroy(): void {
    if (this.clearLocalStorage) this.clearLocalStorage.unsubscribe();
  }
}
