import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharedService } from 'src/app/services/chared.service';

@Component({
  selector: 'app-two-players-by-post',
  templateUrl: './two-players-by-post.component.html',
  styleUrls: ['./two-players-by-post.component.css']
})
export class TwoPlayersByPostComponent implements OnInit {

  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  @Input() data: any = null;
  @Input() routerLink: string[] = [];

  constructor(private router: Router, private sharedService: CharedService) {

  }

  ngOnInit() {
    this.data = {
      ...this.data,
      post_label: this.sharedService.getPosts(this.data?.post).slice(0, 1).shift()?.label
    }
  }

}
