import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  envirement: string = 'frmf';
  constructor() { 
    this.envirement = environment.type;
  }

  ngOnInit(): void {
  }

}
