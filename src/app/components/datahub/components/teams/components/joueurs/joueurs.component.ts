import { Component, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { TeamsService } from "../../service/teams.service";
import { ActivatedRoute } from "@angular/router";

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
  imageUrl: string =
    "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
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
    this.actions("CREATE_CHART_SCATTER7");
    this.actions("CREATE_CHART_SCATTER8");
    this.actions("CREATE_CHART_SCATTER9");
    this.actions("CREATE_CHART_SCATTER10");
    this.actions("CREATE_CHART_SCATTER11");
    this.actions("CREATE_CHART_SCATTER12");
    this.actions("CREATE_CHART_SCATTER13");
    this.actions("CREATE_CHART_SCATTER14");
    this.actions("CREATE_CHART_SCATTER15");
    this.actions("CREATE_CHART_SCATTER16");
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_SCATTER1":
        const myChart1 = echarts.init(
          document.getElementById("chart-efficacite")
        );
        const option1 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart1.setOption(option1);
        break;
      case "CREATE_CHART_SCATTER2":
        const myChart2 = echarts.init(
          document.getElementById("chart-creativite")
        );
        const option2 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart2.setOption(option2);
        break;
      case "CREATE_CHART_SCATTER3":
        const myChart3 = echarts.init(
          document.getElementById("chart-presence-tir")
        );
        const option3 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart3.setOption(option3);
        break;
      case "CREATE_CHART_SCATTER4":
        const myChart4 = echarts.init(
          document.getElementById("chart-qualite-tir")
        );
        const option4 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart4.setOption(option4);
        break;
      case "CREATE_CHART_SCATTER5":
        const myChart5 = echarts.init(
          document.getElementById("chart-contribution-jeu")
        );
        const option5 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart5.setOption(option5);
        break;
      case "CREATE_CHART_SCATTER6":
        const myChart6 = echarts.init(
          document.getElementById("chart-polyvalence-defensive")
        );
        const option6 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart6.setOption(option6);
        break;
      case "CREATE_CHART_SCATTER7":
        const myChart7 = echarts.init(
          document.getElementById("chart-diversite-passes")
        );
        const option7 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart7.setOption(option7);
        break;
      case "CREATE_CHART_SCATTER8":
        const myChart8 = echarts.init(
          document.getElementById("chart-efficacite-domination")
        );
        const option8 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart8.setOption(option8);
        break;
      case "CREATE_CHART_SCATTER9":
        const myChart9 = echarts.init(
          document.getElementById("chart-progression-jeu")
        );
        const option9 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart9.setOption(option9);
        break;
      case "CREATE_CHART_SCATTER10":
        const myChart10 = echarts.init(
          document.getElementById("chart-limplication-creative")
        );
        const option10 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart10.setOption(option10);
        break;
      case "CREATE_CHART_SCATTER11":
        const myChart11 = echarts.init(
          document.getElementById("chart-contribution-offensive")
        );
        const option11 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart11.setOption(option11);
        break;
      case "CREATE_CHART_SCATTER12":
        const myChart12 = echarts.init(
          document.getElementById("chart-precision-passes")
        );
        const option12 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart12.setOption(option12);
        break;
      case "CREATE_CHART_SCATTER13":
        const myChart13 = echarts.init(
          document.getElementById("chart-jeu-aerien")
        );
        const option13 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart13.setOption(option13);
        break;
      case "CREATE_CHART_SCATTER14":
        const myChart14 = echarts.init(
          document.getElementById("chart-efficacite-sauvegarde")
        );
        const option14 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart14.setOption(option14);
        break;
      case "CREATE_CHART_SCATTER15":
        const myChart15 = echarts.init(
          document.getElementById("chart-controle-surface")
        );
        const option15 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart15.setOption(option15);
        break;
      case "CREATE_CHART_SCATTER16":
        const myChart16 = echarts.init(
          document.getElementById("chart-charge-defensive")
        );
        const option16 = {
          grid: {
            left: 40,
            top: 10,
            right: 20,
          },

          xAxis: {
            name: "X",
            nameLocation: "middle",
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + "";
              },
            },
          },
          yAxis: {
            name: "Y",
            nameLocation: "center", // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ""; // Customize Y axis label formatting if needed
              },
            },
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (params.value && params.value.length === 2) {
                var imageUrl =
                  "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
                return (
                  '<img src="' +
                  imageUrl +
                  '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                  "<br>X: " +
                  params.value[0] +
                  "<br>Y: " +
                  params.value[1]
                );
              }
              // Default tooltip content
              return params.data.label || "";
            },
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
              position: "top",
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "red", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.35508, 4.957587],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.993756, -0.884433],
                  label: "cluster",
                  itemStyle: {
                    color: "#37A2DA", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-4.366462, 4.023316],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.565978, -1.256985],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.845762, -3.589788],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.79108, -2.184517],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "#e06343", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.344465, 2.603513],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-1.910108, 4.166946],
                  label: "cluster",
                  itemStyle: {
                    color: "black", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.421993, -2.372646],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [0.639276, -3.41284],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-0.559558, -3.840539],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.414343, 4.007573],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.0782973, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-2.078173, 2.552013],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [-3.912363, 1.325108],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
                {
                  value: [2.441611, 0.444826],
                  label: "cluster",
                  itemStyle: {
                    color: "green", // Set the desired color for this specific data point
                  },
                },
              ],
              type: "scatter",
            },
          ],
        };
        myChart16.setOption(option16);
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
