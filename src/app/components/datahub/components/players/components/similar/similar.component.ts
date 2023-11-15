import { Component, ElementRef, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import * as echarts from "echarts";
import { PlayersService } from "../../service/players.service";

@Component({
  selector: "app-similar",
  templateUrl: "./similar.component.html",
  styleUrls: ["./similar.component.css"],
})
export class SimilarComponent implements OnInit {
  name = "Sampling Depth Slider Demo";
  isLoading = true;
  defaultValues = { min: 0, max: 300 };
  relevantValues = { min: 301, max: 400 };
  oldSelectionValues = { min: 10, max: 400 };
  newSelectionValues = { min: 0, max: 600 };
  players_similar: any = [];
  constructor(
    private playersService: PlayersService,
    private elementRef: ElementRef
  ) { }
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  ngOnInit(): void {
    // this.actions("RADAR");
    this.actions("GET_PLAYERS");
  }
  actions(type: string, REQUEST: any = null): any {
    switch (type) {
      case "GET_PLAYERS":
        this.playersService.getSimiliarPlayers(1).subscribe(
          (result: any) => {
            // console.log(result);
            this.players_similar = result[0];

            // console.log();
            this.actions("RADAR", result[0].similarite[0].option);
            this.isLoading = false;
          },
          (err: HttpErrorResponse) => {
            this.isLoading = false;
            console.log(err);
          }
        );
        break;
      case "RADAR":
        const chartContainer =
          this.elementRef.nativeElement.querySelector("#chartContainer");
        const myChart = echarts.init(chartContainer);
        myChart.setOption(REQUEST);
        break;
    }
  }
}
