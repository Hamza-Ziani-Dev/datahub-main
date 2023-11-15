import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-presentation-header',
  templateUrl: './presentation-header.component.html',
  styleUrls: ['./presentation-header.component.css']
})
export class PresentationHeaderComponent implements OnInit {

  loading = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

}
