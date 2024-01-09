import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as echarts from "echarts";

@Component({
  selector: "app-dialog-joueur",
  templateUrl: "./dialog-joueur.component.html",
  styleUrls: ["./dialog-joueur.component.css"],
})
export class DialogJoueurComponent implements OnInit {
  Data_Efficacite: any;
  Indice_Créativite: any;
  activeLabel: number = 1;
  setActiveLabel(labelNumber: number) {
    this.activeLabel = labelNumber;
  }
  imageUrl: string =
    "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  dataSource: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogJoueurComponent>
  ) {}
  ngOnInit() {
    this.actions("CREATE_CHART_EFFICACITE_DRIBBLEUR");
    this.actions("CREATE_CHART_EFFICACITE_CREATIVITE");
    this.actions("CREATE_CHART_EFFICACITE_PRESENCETIR");
    this.actions("CREATE_CHART_EFFICACITE_QUALITETIR");
    this.actions("CREATE_CHART_EFFICACITE_CONTRIBUTION_JEU");
    this.actions("CREATE_CHART_EFFICACITE_POLYVALENCE_DEFENSIVE");
    this.actions("CREATE_CHART_EFFICACITE_DOMINATION");
    this.actions("CREATE_CHART_EFFICACITE_PROGRESSION_JEU");
    this.actions("CREATE_CHART_EFFICACITE_LIMPLICATION_CREATIVE");
    this.actions("CREATE_CHART_EFFICACITE_CONTRIBUTION_OFFENSIVE");
    this.actions("CREATE_CHART_EFFICACITE_PRECISION_PASSES");
    this.actions("CREATE_CHART_EFFICACITE_JEU_AERIEN");
    this.actions("CREATE_CHART_EFFICACITE_EFFICACITE_SAUVEGARDE");
    this.actions("CREATE_CHART_EFFICACITE_CONTROLE_SURFACE");
    this.actions("CREATE_CHART_EFFICACITE_CHARGE_DEFENSIVE");
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_EFFICACITE_DRIBBLEUR":
        setTimeout(() => {
          const Chart1 = document.getElementById("chart-efficacite-dribbleur");
          try {
            const myChart = echarts.init(Chart1);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_CREATIVITE":
        setTimeout(() => {
          const Chart = document.getElementById("chart-efficacite-creativite");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_PRESENCETIR":
        setTimeout(() => {
          const Chart = document.getElementById(
            "chart-efficacite-presence-tir"
          );
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_QUALITETIR":
        setTimeout(() => {
          const Chart4 = document.getElementById("chart-qualité-tir");
          try {
            const myChart4 = echarts.init(Chart4);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart4.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_CONTRIBUTION_JEU":
        setTimeout(() => {
          const Chart = document.getElementById(
            "chart-efficacite-contribution-jeu"
          );
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_POLYVALENCE_DEFENSIVE":
        setTimeout(() => {
          const Chart = document.getElementById(
            "chart-efficacite-polyvalence-defensive"
          );
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_DOMINATION":
        setTimeout(() => {
          const Chart = document.getElementById(
            "chart-efficacite-efficacité-domination"
          );
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_PROGRESSION_JEU":
        setTimeout(() => {
          const Chart = document.getElementById("chart-progression-jeu");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_LIMPLICATION_CREATIVE":
        setTimeout(() => {
          const Chart = document.getElementById("chart-Iimplication-créative");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_CONTRIBUTION_OFFENSIVE":
        setTimeout(() => {
          const Chart = document.getElementById("chart-contribution-offensive");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_PRECISION_PASSES":
        setTimeout(() => {
          const Chart = document.getElementById("chart-precision-passes");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_JEU_AERIEN":
        setTimeout(() => {
          const Chart = document.getElementById("chart-jeu-aérien");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_EFFICACITE_SAUVEGARDE":
        setTimeout(() => {
          const Chart = document.getElementById("chart-efficacite-sauvegarde");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_CONTROLE_SURFACE":
        setTimeout(() => {
          const Chart = document.getElementById("chart-controle-surface");
          try {
            const myChart = echarts.init(Chart);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
      case "CREATE_CHART_EFFICACITE_CHARGE_DEFENSIVE":
        setTimeout(() => {
          const Chart16 = document.getElementById("chart-charge-defensive");
          try {
            const myChart = echarts.init(Chart16);
            const option = {
              color: ["#dd4444", "#f47721", "#34bf49"],
              legend: {
                top: 10,
                data: ["RCA", "RSB", "WAC"],
                textStyle: {
                  fontSize: 16,
                },
              },
              grid: {
                left: 30,
                right: 50,
                top: 50,
                bottom: 30,
              },
              tooltip: {
                backgroundColor: "rgba(255,255,255,0.7)",
                formatter: function (param) {
                  var value = param.value;
                },
              },
              xAxis: {
                type: "value",
                name: "x",
                nameGap: 16,
                nameTextStyle: {
                  fontSize: 16,
                },
                max: 31,
                splitLine: {
                  show: true,
                },
              },
              yAxis: {
                type: "value",
                name: "y",
                nameLocation: "end",
                nameGap: 20,
                nameTextStyle: {
                  fontSize: 16,
                },
                splitLine: {
                  show: true,
                },
              },
              visualMap: [
                {
                  show: false,
                  left: "right",
                  top: "10%",
                  dimension: 2,
                  // min: 0,
                  // max: 250,
                  // itemWidth: 30,
                  // itemHeight: 120,
                  textGap: 30,
                  inRange: {
                    symbolSize: [8, 28],
                  },
                },
              ],
              series: [
                {
                  name: "WAC",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [3, 26, 7, 6, 0.3, 10, 5, "A"],
                    [4, 53, 1, 29, 0.33, 12, 3, "B"],
                    [5, 42, 24, 44, 0.76, 40, 16, "X"],
                    [6, 82, 48, 90, 1.77, 68, 33, "Z"],
                    [7, 44, 49, 77, 1.46, 48, 27, "M"],
                    [8, 58, 55, 80, 1.29, 59, 29, "L"],
                    [9, 27, 216, 280, 4.8, 108, 64, "P"],
                    [10, 15, 127, 216, 2.52, 61, 27, "I"],
                    [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                    [12, 41, 11, 40, 0.43, 21, 7, "R"],
                    [13, 64, 38, 74, 1.04, 46, 22, "T"],
                    [14, 98, 79, 10, 1.7, 75, 41, "E"],
                    [15, 68, 63, 16, 1.48, 44, 26, "W"],
                    [16, 33, 6, 29, 0.34, 13, 5, "S"],
                    [17, 94, 66, 11, 1.54, 62, 31, "D"],
                    [18, 26, 42, 192, 3.88, 93, 73, "G"],
                    [19, 27, 31, 54, 0.96, 32, 14, "U"],
                    [20, 22, 8, 17, 0.48, 13, 10, "O"],
                  ],
                },
                {
                  name: "RSB",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 91, 45, 15, 0.82, 34, 23, "HH"],
                    [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                    [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                    [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                    [5, 26, 77, 114, 1.07, 55, 51, "EE"],
                    [6, 49, 81, 121, 1.28, 68, 51, "QQ"],
                    [7, 16, 77, 114, 1.07, 55, 51, "SS"],
                    [8, 89, 65, 78, 0.86, 51, 26, "RR"],
                    [9, 53, 33, 47, 0.64, 50, 17, "AA"],
                    [10, 80, 55, 80, 1.01, 75, 24, "XX"],
                    [11, 117, 81, 124, 1.03, 45, 24, "VV"],
                    [12, 99, 71, 142, 1.1, 62, 42, "BB"],
                  ],
                },
                {
                  name: "RCA",
                  type: "scatter",
                  itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.3)",
                  },
                  data: [
                    [1, 26, 37, 27, 1.163, 27, 13, "A"],
                    [2, 85, 62, 71, 1.195, 60, 8, "E"],
                    [3, 78, 38, 74, 1.363, 37, 7, "AA"],
                    [4, 21, 21, 36, 0.634, 40, 9, "ZZ"],
                    [5, 41, 42, 46, 0.915, 81, 13, "RR"],
                  ],
                },
              ],
            };
            myChart.setOption(option);
          } catch (error) {}
        }, 200);
        break;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
