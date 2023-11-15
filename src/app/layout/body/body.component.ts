import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  authStatus: boolean = false;
  authStatusSub: Subscription;
  constructor(private authService: authService) { }
  ngOnInit(): void {
    this.authStatusSub = this.authService.getUpdatedAuthSTatus()
      .subscribe(
        (response: boolean) => {
          this.authStatus = response;
        }
      );
    this.authService.checkAuth();
  }
  getBodyClass(): string {
    let styleClass = '';
    if (this.authStatus === false) {
      return 'w-100';
    }
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body body-md-screen'
    }
    return styleClass;
  }
}
