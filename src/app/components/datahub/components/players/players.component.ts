import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PlayersService } from './service/players.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  isLoading = true;
  Player: any = {};
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.actions("GET_ID");
  }
  actions(type: string, REQUEST: any = null): any {
    switch (type) {
      case "GET_ID":
        this.playersService.getId(1).subscribe(
          (result: any) => {
            this.Player = result;
            this.isLoading = false;
          },
          (err: HttpErrorResponse) => {
            this.isLoading = false;
            console.log(err);
          }
        );
        break;
    }
  }

}
