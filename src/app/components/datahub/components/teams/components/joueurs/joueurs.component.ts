import { Component, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { TeamsService } from "../service/teams.service";
import { ActivatedRoute } from "@angular/router";
import * as ecStat from "echarts-stat";
import * as transform from "echarts-stat";

@Component({
  selector: "app-joueurs",
  templateUrl: "./joueurs.component.html",
  styleUrls: ["./joueurs.component.css"],
})
export class JoueursComponent implements OnInit {
  activeLabel: number = 1; // Initially, no label is active
  setActiveLabel(labelNumber: number) {
    this.activeLabel = labelNumber;
  }

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
    private TeamService: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ID = this.route.snapshot.parent?.params.id;
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    console.log(this.ID, this.PLAYER_ID);
    this.actions("CREATE_CHART_SCATTER1");
    this.actions("CREATE_CHART_SCATTER2");
    this.actions("CREATE_CHART_SCATTER3");
    this.actions("CREATE_CHART_SCATTER4");
    this.actions("CREATE_CHART_SCATTER5");
    this.actions("CREATE_CHART_SCATTER6");
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_SCATTER1":
        const myChart1 = echarts.init(
          document.getElementById("chart-maitrise")
        );
        // See https://github.com/ecomfe/echarts-stat
        echarts.registerTransform(ecStat.transform.clustering);
        var CLUSTER_COUNT = 4;
        var DIENSIION_CLUSTER_INDEX = 2;
        var COLOR_ALL = ["#37A2DA", "#e06343", "#37a354", "#b55dba"];
        var pieces = [];
        for (var i = 0; i < CLUSTER_COUNT; i++) {
          pieces.push({
            value: i,
            label: "equipe" + i,
            color: COLOR_ALL[i],
          });
        }
        const option1 = {
          dataset: [
            {
              source: [
                [8.3, 143],
                [8.6, 214],
                [8.8, 251],
                [10.5, 26],
                [10.7, 86],
                [10.8, 93],
                [11.0, 176],
                [11.0, 39],
                [11.1, 221],
                [11.2, 188],
                [11.3, 57],
                [11.4, 91],
                [11.4, 191],
                [11.7, 8],
                [12.0, 196],
                [12.9, 177],
                [12.9, 153],
                [13.3, 201],
                [13.7, 199],
                [13.8, 47],
                [14.0, 81],
                [14.2, 98],
                [14.5, 121],
                [16.0, 37],
                [16.3, 12],
                [17.3, 105],
                [17.5, 168],
                [17.9, 84],
                [18.0, 197],
                [18.0, 155],
                [20.6, 125],
              ],
            },
            {
              transform: {
                type: "ecStat:clustering",
                print: true,
                config: {
                  clusterCount: CLUSTER_COUNT,
                  outputType: "single",
                  outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX,
                },
              },
            },
          ],
          tooltip: {
            position: "top",
          },
          visualMap: {
            top: "middle",
            bottom: 5,
            splitNumber: CLUSTER_COUNT,
            dimension: DIENSIION_CLUSTER_INDEX,
            pieces: pieces,
          },
          grid: {
            left: 120,
          },
          xAxis: {
            // type: 'category',
            scale: true,
          },
          yAxis: {},
          series: {
            type: "scatter",
            encode: { tooltip: [0, 0] },
            symbolSize: 15,
            itemStyle: {
              borderColor: "#555",
            },
            datasetIndex: 1,
          },
        };
        myChart1.setOption(option1);
        break;
      case "CREATE_CHART_SCATTER2":
        const myChart2 = echarts.init(
          document.getElementById("chart-defenseur")
        );
        const option2 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                {
                  value: [10, 100, "Berkan"],
                  name: "Berkan",
                },
                {
                  value: [10, 37],
                  name: "RCA",
                },
                {
                  value: [90, 30],
                  name: "WAC",
                },
                {
                  value: [30, 80],
                  name: "KAC",
                },
                {
                  value: [20, 70],
                  name: "RSB",
                },
              ],
              type: "scatter",
              emphasis: {
                focus: "self",
              },
              labelLayout: {},
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
            },
          ],
        };
        myChart2.setOption(option2);
        break;
      case "CREATE_CHART_SCATTER3":
        const myChart3 = echarts.init(document.getElementById("chart-gardian"));
        const option3 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                {
                  value: [10, 100, "Berkan"],
                  name: "Berkan",
                },
                {
                  value: [10, 37],
                  name: "RCA",
                },
                {
                  value: [90, 30],
                  name: "WAC",
                },
                {
                  value: [30, 80],
                  name: "KAC",
                },
                {
                  value: [20, 70],
                  name: "RSB",
                },
              ],
              type: "scatter",
              emphasis: {
                focus: "self",
              },
              labelLayout: {},
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
            },
          ],
        };
        myChart3.setOption(option3);
        break;
      case "CREATE_CHART_SCATTER4":
        const myChart4 = echarts.init(
          document.getElementById("chart-maitrise1")
        );
        const option4 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                {
                  value: [10, 100, "Berkan"],
                  name: "Berkan",
                },
                {
                  value: [10, 37],
                  name: "RCA",
                },
                {
                  value: [90, 30],
                  name: "WAC",
                },
                {
                  value: [30, 80],
                  name: "KAC",
                },
                {
                  value: [20, 70],
                  name: "RSB",
                },
              ],
              type: "scatter",
              emphasis: {
                focus: "self",
              },
              labelLayout: {},
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
            },
          ],
        };
        myChart4.setOption(option4);
        break;
      case "CREATE_CHART_SCATTER5":
        const myChart5 = echarts.init(
          document.getElementById("chart-gardian1")
        );
        const option5 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                {
                  value: [10, 100, "Berkan"],
                  name: "Berkan",
                },
                {
                  value: [10, 37],
                  name: "RCA",
                },
                {
                  value: [90, 30],
                  name: "WAC",
                },
                {
                  value: [30, 80],
                  name: "KAC",
                },
                {
                  value: [20, 70],
                  name: "RSB",
                },
              ],
              type: "scatter",
              emphasis: {
                focus: "self",
              },
              labelLayout: {},
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
            },
          ],
        };
        myChart5.setOption(option5);
        break;
      case "CREATE_CHART_SCATTER6":
        const myChart6 = echarts.init(
          document.getElementById("chart-defenseur1")
        );
        const option6 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                {
                  value: [10, 100, "Berkan"],
                  name: "Berkan",
                },
                {
                  value: [10, 37],
                  name: "RCA",
                },
                {
                  value: [90, 30],
                  name: "WAC",
                },
                {
                  value: [30, 80],
                  name: "KAC",
                },
                {
                  value: [20, 70],
                  name: "RSB",
                },
              ],
              type: "scatter",
              emphasis: {
                focus: "self",
              },
              labelLayout: {},
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
            },
          ],
        };
        myChart6.setOption(option6);
        break;

      case "UPDATE_CHART":
        break;

      case "DO_FILTER":
        break;

      default:
        break;
    }
  }
}
