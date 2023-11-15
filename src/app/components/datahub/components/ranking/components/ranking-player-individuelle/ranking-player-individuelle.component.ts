import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RankingService } from "../../service/ranking.service";
import { ActivatedRoute } from "@angular/router";
import * as echarts from "echarts";

@Component({
  selector: "app-ranking-player-individuelle",
  templateUrl: "./ranking-player-individuelle.component.html",
  styleUrls: ["./ranking-player-individuelle.component.css"],
})
export class RankingPlayerIndividuelleComponent implements OnInit {
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  ID: number = null;
  chart: any = {
    title: null,
    legend: [],
  };
  PLAYER_ID: number = null;
  dataSource: any[] = [];
  constructor(
    private rankingService: RankingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ID = this.route.snapshot.parent?.params.id;
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    console.log(this.ID, this.PLAYER_ID);
    this.actions("GET");
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR":
        const myChart1 = echarts.init(
          document.getElementById("radar-percentilles")
        );
        const option1 = {
          angleAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          radiusAxis: {},
          polar: {},
          series: [
            {
              type: "bar",
              data: [10, 7, 9, 2, 4, 8, 8],
              coordinateSystem: "polar",
              name: "A",
              stack: "a",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              data: [2, 4, 6, 1, 3, 2, 1],
              coordinateSystem: "polar",
              name: "B",
              stack: "a",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              data: [1, 2, 3, 4, 1, 2, 5],
              coordinateSystem: "polar",
              name: "C",
              stack: "a",
              emphasis: {
                focus: "series",
              },
            },
          ],
          legend: {
            show: true,
            data: ["A", "B", "C"],
          },
        };
        myChart1.setOption(option1);
        break;

//       case "CREATE_CHART_SCATTER1":
//         const myChart2 = echarts.init(
//           document.getElementById("chart-scatter1")
//         );
//         // prettier-ignore
//         const hours = [
//   '12a', '1a', '2a', '3a', '4a', '5a', '6a',
//   '7a', '8a', '9a','10a','11a',
//   '12p', '1p', '2p', '3p', '4p', '5p',
//   '6p', '7p', '8p', '9p', '10p', '11p'
// ];

//         // prettier-ignore
//         const days = [
//   '1', '2', '3',
//   '4', '5', '6', '7'
// ];

//         // prettier-ignore
//         const data = [[2,6,5],[0,1,1],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0]];

//         const title: echarts.TitleComponentOption[] = [];
//         const singleAxis: echarts.SingleAxisComponentOption[] = [];
//         const series: echarts.ScatterSeriesOption[] = [];

//         days.forEach(function (day, idx) {
//           singleAxis.push({
//             left: 10,

//             data: hours,
//             top: 1 * 30,
//             height: 100,
//             width:200,
//             axisLabel: {
//               interval: 2,
//             },
//           });
//           series.push({
//             singleAxisIndex: 1,
//             coordinateSystem: "singleAxis",
//             type: "scatter",
//             data: [],
//             symbolSize: function (dataItem) {
//               return dataItem[1] * 4;
//             },
//           });
//         });

//         data.forEach(function (dataItem) {
//           (series as any)[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
//         });

//         const option2 = {
//           singleAxis: singleAxis,
//           series: series,
//         };

//         myChart2.setOption(option2);
//         break;

      case "UPDATE_CHART":
        break;
      case "GET":
        this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = RES;
            this.isLoading = false;
            this.COLORS = RES?.Option?.colors;
            this.chart = {
              title: RES?.Option?.title?.text,
              legend: RES?.Option?.legend?.data,
            };
            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;

            this.actions("CREATE_CHART_RADAR", RES?.Option1);
            // this.actions("CREATE_CHART_SCATTER1", RES?.Option2);
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        );
        break;
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }
}
