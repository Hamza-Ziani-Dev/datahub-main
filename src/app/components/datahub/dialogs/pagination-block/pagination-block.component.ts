import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagination-block',
  templateUrl: './pagination-block.component.html',
  styleUrls: ['./pagination-block.component.css']
})
export class PaginationBlockComponent implements OnInit {
  @Input() label_home: string = 'BASE DE DONNÉES DATAHUB';
  currentRoute: string;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  navigateToRoute(direction: 'previous' | 'dashboard' | 'home') {
    const baseRoute = this.currentRoute.split('?')[0];
    switch (direction) {
      case 'dashboard':
        this.router.navigate(["/side-blocks"]);
        break;
      case 'home':
        this.router.navigate([`/datahub/${baseRoute.includes('database') ? 'database/list-players-post' : 'ranking/players-post'}`]);
        break;
      case 'previous':
        this.location.back()
        break;
      default:
        break;
    }
  }
}
