import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { authService } from 'src/app/components/auth/service/auth.service';
import { User } from 'src/app/shared/interface/user.model';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'equipe', 'age', 'time_play', 'pied', 'taille'];
  filters: any = {
    player: null,
    post: [],
    ligue: [],
    annee: [],
  };
  pagination = {
    loading: true,
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 15, 20, 25, 30, 35]
  }
  changerLogo = false;
  user: User;
  envirement: string = 'frmf';
  constructor(
    private authService: authService,
    private route: ActivatedRoute,
    public location: Location
  ) {
    this.envirement = environment.type;
  }
  selectedLigue: string = 'LNFF'; // Default value
  logoPath: string = 'assets/images/logo-botola.png'; // Default logo path

  onSelectedLigueChange(selectedLigue: string) {
    this.selectedLigue = selectedLigue;
    this.setLogoPath();
  }


  ngOnInit() {
    this.authService.getUpdatedUser()
      .subscribe(
        (user: User) => {
          if (user) {
            this.user = user;
          }
        })
    this.authService.getUser();
  }
  setLogoPath() {
    if (this.selectedLigue === 'LNFF') {
      this.logoPath = 'assets/images/logo-botola.png';
    } else if (this.selectedLigue === 'LNFP') {
      this.logoPath = 'assets/images/logo_frmf.png';
    } else{
      this.logoPath = 'assets/images/logo-botola.png';
    }
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
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
       
     

      default:
        break;
    }
  }

  canDisplayPag(): Boolean {
    if (['/datahub/ranking', '/datahub/ranking/players-post'].includes(window.location.pathname)) {
      return false;
    }
    return true;
  }
}
