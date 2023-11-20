import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../service/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  constructor(
    private TeamService: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

}
