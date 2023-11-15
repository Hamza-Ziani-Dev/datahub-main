import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { authService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user = null;
  constructor(private router: Router, private authService: authService) { }

  ngOnInit() {
    // getting the logged user data
    this.authService.getUpdatedUser()
      .subscribe(
        result => {
          this.user = result;
        }
      );
    this.authService.getUser();
  }

}
