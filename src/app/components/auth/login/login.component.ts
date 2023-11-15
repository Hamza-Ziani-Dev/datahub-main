import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from 'src/app/components/auth/service/auth.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm", { static: false }) loginForm: NgForm;
  errorMessage = '';
  isLoading = false;
  typePassword: boolean = true;
  errorSub: Subscription;
  envirement: string = 'pro';
  constructor(private authService: authService) {
    this.envirement = environment.type;
  }

  ngOnInit() {
    this.errorSub = this.authService.getErrorMessageListener()
      .subscribe(
        err => {
          this.isLoading = false;

          this.errorMessage = err;
        }
      );
  }
  onLogin() {
    if (this.loginForm.controls.email.invalid || this.loginForm.controls.password.invalid) {
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
  ngOnDestroy() {
    if (this.errorSub != undefined) this.errorSub.unsubscribe();
  }

}
