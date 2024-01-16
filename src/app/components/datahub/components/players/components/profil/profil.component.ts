import { Component, ElementRef, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { HttpErrorResponse } from "@angular/common/http";
import { PlayersService } from "../../service/players.service";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"],
})
export class ProfilComponent implements OnInit {
  chart = "radar";
  position = "fw";
  player: any = {};
  show_graph = false;
  myChart: any;
  myChart2: any;
  bar: any;

  constructor(
    private playersService: PlayersService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.actions("GET_PROFIL");

  }
  actions(CASE: string, REQUEST: any = null) {
    switch (CASE) {
      case "GET_PROFIL":
        this.playersService.getProfilPlayer(1).subscribe(
          (result: any) => {
            // console.log(result);
            this.player = result[0];
            // delete this.player.graphs
            this.bar = result[0].graphs[1].option;
            this.actions("LOAD_GRAPHS", {
              pie: result[0].graphs[0].option,
              bar: result[0].graphs[1].option,
            });
            // console.log(this.player);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
        break;
      case "LOAD_GRAPHS":
        const chartContainer =
          this.elementRef.nativeElement.querySelector("#chartContainer");
        this.myChart = echarts.init(chartContainer);

        this.myChart.setOption(REQUEST.pie);

        // this.myChart2.setOption(REQUEST.bar);
        break;
      case "CHANGE_GRAPH":
        this.show_graph = !this.show_graph;
        // this.myChart2.resize(100,900);
        const chartContainer2 =
          this.elementRef.nativeElement.querySelector("#chartContainer2");
        this.myChart2 = echarts.init(chartContainer2);
        this.myChart2.setOption(this.bar);

        break;
    }
  }
  //   scoutter() {
  //     const chartContainer2 =
  //       this.elementRef.nativeElement.querySelector("#chartContainer2");
  //     const myChart2 = echarts.init(chartContainer2);
  //     const chartContainer3 =
  //       this.elementRef.nativeElement.querySelector("#chartContainer3");
  //     const myChart3 = echarts.init(chartContainer3);
  //     // prettier-ignore
  //     const hours = [
  //     '1','2'
  // ];
  //     // prettier-ignore
  //     const days = [
  //     ''
  // ];
  //     // prettier-ignore
  //     const data = [
  //       [0, 0, 3],
  //       [0, 1, 3],
  //     ];
  //     const title = [];
  //     const singleAxis = [];
  //     const series = [];
  //     days.forEach(function (day, idx) {
  //       title.push({
  //         textBaseline: "middle",
  //         top: ((idx + 0.5) * 100) / 7 + "%",
  //         text: day,
  //       });
  //       singleAxis.push({
  //         left: 150,
  //         type: "category",
  //         boundaryGap: false,
  //         data: hours,
  //         top: (idx * 100) / 7 + 5 + "%",
  //         height: 100 / 7 - 10 + "%",
  //         axisLabel: {
  //           interval: 2,
  //         },
  //       });
  //       series.push({
  //         singleAxisIndex: idx,
  //         coordinateSystem: "singleAxis",
  //         type: "scatter",
  //         data: [],
  //         symbolSize: function (dataItem) {
  //           return dataItem[1] * 4;
  //         },
  //       });
  //     });
  //     data.forEach(function (dataItem) {
  //       series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  //     });
  //     const option = {
  //       tooltip: {
  //         position: "top",
  //       },
  //       title: title,
  //       singleAxis: singleAxis,
  //       series: series,
  //     };
  //     myChart2.setOption(option);
  //     myChart3.setOption(option);
  //   }
}
