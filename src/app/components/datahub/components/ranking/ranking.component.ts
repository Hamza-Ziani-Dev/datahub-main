import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { authService } from 'src/app/components/auth/service/auth.service';
import { User } from 'src/app/shared/interface/user.model';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  user: User;
  envirement: string = 'frmf';
  constructor(
    private authService: authService,
    private route: ActivatedRoute,
    public location: Location
  ) {
    this.envirement = environment.type;
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

  canDisplayPag(): Boolean {
    if (['/datahub/ranking', '/datahub/ranking/players-post'].includes(window.location.pathname)) {
      return false;
    }
    return true;
  }
}
