import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from 'src/app/components/auth/service/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css']
})
export class AccountDashboardComponent implements OnInit {
  user;
  userSub: Subscription;
  isLoading = [true, false];
  isSaving = false;
  saved = false;
  errorMessage=""
  @ViewChild('accountForm', { static: false }) accountForm: NgForm;
  constructor(private router: Router, private authService: authService) { }

  ngOnInit() {
    // getting the logged user data 
    this.userSub = this.authService.getUpdatedUser()
      .subscribe(
        result => {
          this.user = result;
          this.isLoading[0] = false;
          this.isLoading[1] = false;
          // if (this.isSaving) {
          //   this.saved = true;
          // }
        }
      );
    this.authService.getUser();
  }
  // saving the user data on submit
  onSave() {
    this.saved = false;
    this.errorMessage=null;
    this.isLoading[1] = true;
    // checking if the form is valid
    const controls = Object.values(this.accountForm.controls);
    for (let control of controls) {
      if (control.invalid) {
        this.isLoading[1] = false;
        return;
      }
    }
    this.isSaving = true;
    this.authService.updateUser(this.user).subscribe((response: any) => {
      // this.authService.userByToken()s
      const token = response.token;
      localStorage.setItem("token", response.token);
      const decodedToken = this.authService.getDecodedAccessToken(token);
      this.user = decodedToken.user;
      console.log(this.user);
      this.authService.updatedUser.next(decodedToken.user);
      this.saved = true;
      if(response.password_changed)
      this.authService.logout()
    },  (error: HttpErrorResponse) => {
        if(error.status===409)
       this.errorMessage=error.error.message
       this.isLoading[0] = false;
          this.isLoading[1] = false;
    });;
  }
}
