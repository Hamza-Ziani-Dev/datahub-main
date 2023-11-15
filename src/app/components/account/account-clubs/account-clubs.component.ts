import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/components/auth/service/auth.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-clubs',
  templateUrl: './account-clubs.component.html',
  styleUrls: ['./account-clubs.component.css']
})
export class AccountClubsComponent implements OnInit {
  clubs = [];
  user: any;
  equipeSub: Subscription;
  userSub: Subscription;
  isLoading = true;
  constructor(private authService: authService) { }

  ngOnInit() {
    // getting the logged user data 
    this.userSub = this.authService.getUpdatedUser()
      .subscribe(
        result => {
          this.user = result;
        }
      );
    this.authService.getUser();

    this.getUpdatedClubs();
  }
  ngOnDestroy(): void {
    this.equipeSub.unsubscribe()
  }
  // getting the logged user clubs
  getUpdatedClubs() {
    this.equipeSub = this.authService.geListEquipes().pipe(
      map(
        (res: any) => {
          // mapping the returned and adding a property called checked that will decide if this club is the current chosen club by he user 
          return res.map(
            result => {
              result['checked'] = this.user?.clubId == result.id;
              return result;
            }
          );
        }
      )
    ).subscribe(
      (result: any) => {
        if (this.user?.type != 'owner') {
          let clubs = this.user?.clubs;
          for (let i = 0; i < clubs.length; i++) {
            clubs[i] = parseInt(clubs[i]);
          }
          this.clubs = result.filter(element => clubs.includes(element.id));
        } else {
          this.clubs = result;
        }
        this.isLoading = false;
      }
    );
  }
  // changing the current chosen club bythe user
  changed(id) {
    for (let i = 0; i < this.clubs.length; i++) {
      this.clubs[i]['checked'] = this.clubs[i].id == id;
    }
    this.authService.changeClub(id);
  }
  // delete a club owened by the user
  deleteClub(id) {

  }
}
