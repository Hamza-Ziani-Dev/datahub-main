import { Component, ElementRef, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { HttpErrorResponse } from "@angular/common/http";
import { PlayersService } from "../../service/players.service";

@Component({
  selector: "app-comparison",
  templateUrl: "./comparison.component.html",
  styleUrls: ["./comparison.component.css"],
})
export class ComparisonComponent implements OnInit {
  constructor(
    private playersService: PlayersService,
    private elementRef: ElementRef
  ) { }
  current_palyer: any = {};
  comparison_palyer: any = {};
  players_comparison: any = [];
  ngOnInit(): void {
    // const chartContainer =
    //   this.elementRef.nativeElement.querySelector("#chartContainer");
    // const myChart = echarts.init(chartContainer);
    // const chartContainer2 =
    //   this.elementRef.nativeElement.querySelector("#chartContainer2");
    // const myChart2 = echarts.init(chartContainer2);
    // var option;
    // option = {
    //   tooltip: {},
    //   angleAxis: {
    //     type: "category",
    //     data: ["Category A", "Category B", "Category C", "Category D"],
    //     min: 0,
    //     max: 360,
    //     interval: 30,
    //     clockwise: false,
    //     startAngle: 45,
    //   },
    //   radiusAxis: {
    //     min: 0,
    //     max: 10,
    //     interval: 2,
    //   },
    //   polar: {},
    //   series: [
    //     {
    //       type: "bar",
    //       name: "A",
    //       data: [
    //         { value: 30, itemStyle: { color: "#FF5733" } }, // Custom color for the first data item
    //         { value: 40, itemStyle: { color: "#FF5733" } }, // Custom color for the second data item
    //         { value: 40, itemStyle: { color: "#FF5733" } }, // Custom color for the second data item
    //         { value: 40, itemStyle: { color: "#FF5733" } }, // Custom color for the second data item
    //         { value: 20, itemStyle: { color: "#8A2BE2" } }, // Custom color for the third data item
    //         { value: 50, itemStyle: { color: "#8A2BE2" } }, // Custom color for the fourth data item
    //       ],
    //       coordinateSystem: "polar",
    //       stack: "a",
    //       showSymbol: false,
    //       emphasis: {
    //         focus: "series",
    //       },
    //       barWidth: "95%",
    //       barGap: "10%",
    //     },
    //     {
    //       type: "line",
    //       data: [
    //         { value: 40, itemStyle: { color: "#FF5733" } }, // Custom color for the first data item
    //         { value: 50, itemStyle: { color: "#FF5733" } }, // Custom color for the second data item
    //         { value: 50, itemStyle: { color: "#FF5733" } }, // Custom color for the second data item
    //         { value: 50, itemStyle: { color: "#FF5733" } }, // Custom color for the second data item
    //         { value: 30, itemStyle: { color: "#8A2BE2" } }, // Custom color for the third data item
    //         { value: 60, itemStyle: { color: "transparent" } }, // Custom color for the fourth data item
    //       ],
    //       coordinateSystem: "polar",
    //       name: "C",
    //       stack: "a",
    //       showSymbol: false,
    //       emphasis: {
    //         focus: "series",
    //       },
    //     },
    //   ],
    //   legend: {
    //     show: false,
    //   },
    // };

    // myChart.setOption(option);
    // myChart2.setOption(option);

    this.actions("GET_COMPARISON");
  }
  actions(type: string, REQUEST: any = null): any {
    switch (type) {
      case "GET_COMPARISON":
        this.playersService.getComparisonPlayer(1).subscribe(
          (result: any) => {
            this.current_palyer = result[0];
            this.players_comparison = result[result.length - 1];
            this.actions("GRAPH_CURRENT", {
              current: this.current_palyer.option,
              comparison: this.players_comparison.option,
            });
            // console.log(this.players_comparison);
            // this.actions("RADAR", result[0].similarite[0].option);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
        break;
      case "GRAPH_CURRENT":
        const chartContainer =
          this.elementRef.nativeElement.querySelector("#chartContainer");
        const myChart = echarts.init(chartContainer);

        myChart.setOption(REQUEST.current);

        const chartContainer2 =
          this.elementRef.nativeElement.querySelector("#chartContainer2");
        const myChart2 = echarts.init(chartContainer2);

        myChart2.setOption(REQUEST.comparison);

        break;
      default:
        break;
    }
  }
}
