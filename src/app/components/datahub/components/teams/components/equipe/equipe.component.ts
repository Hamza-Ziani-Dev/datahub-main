import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { TeamsService } from "../../service/teams.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.css"],
})
export class EquipeComponent implements OnInit {
  isLoading: boolean = true;
  URL1: string ="https://seeklogo.com/images/R/raja-club-athletic-rca-logo-2C8B83D406-seeklogo.com.png";
  URL2: string ="https://seeklogo.com/images/R/renaissance-sportive-berkane-rsb-logo-9B110745FD-seeklogo.com.png";
  URL3: string ="https://seeklogo.com/images/I/ittihad-riadi-tanger-irt-logo-2C4CC93241-seeklogo.com.png";
  URL4: string ="https://seeklogo.com/images/W/wac-wydad-athletic-club-of-casablanca-2022-logo-67FEE5AE5E-seeklogo.com.png";
  URL5: string ="https://seeklogo.com/images/K/kenitra-athletic-club-kac-logo-7470E9B48E-seeklogo.com.png";
  URL6 :string ="https://seeklogo.com/images/F/fus-rabat-logo-496BE80C22-seeklogo.com.png";
  URL7 :string ="https://seeklogo.com/images/F/FAR_Rabat-logo-E1B8C5011D-seeklogo.com.png";
  URL8 :string ="https://seeklogo.com/images/M/mat-moghreb-atletico-tetouan-logo-4E8E13EEA5-seeklogo.com.png";
  URL9 : string = "https://seeklogo.com/images/M/maghreb-association-sportive-de-fez-mas-logo-D6AA7B92EB-seeklogo.com.png";
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
    this.actions("CREATE_CHART_RADAR1");
    this.actions("CREATE_CHART_RADAR2");
    this.actions("CREATE_CHART_RADAR3");
    this.actions("CREATE_CHART_SCATTER1");
    this.actions("CREATE_CHART_SCATTER2");
    this.actions("CREATE_CHART_SCATTER3");
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        const myChart1 = echarts.init(
          document.getElementById("chart-offensive")
        );
        const option1 = {
          legend: {
            data: ["RSB Berkane", "Moyenne de ligue"],
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "Buts", max: 6500 },
              { name: "XContre", max: 16000 },
              { name: "Tirs", max: 30000 },
              { name: "Tirs cadre", max: 38000 },
              { name: "Contre Prise", max: 52000 },
              { name: "Passes Complete", max: 25000 },
              { name: "Duels Offensive ", max: 25000 },
            ],
            radius: 85,
            center: ["42%", "60%"],
          },
          series: [
            {
              type: "radar",
              areaStyle: {},
              // itemStyle: {
              //   color:"#E55C00",
              // },
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
                  name: "RSB Berkane",
                  itemStyle: {
                    color: "#E55C00",
                  },
                },
                {
                  value: [
                    5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
                  ],
                  name: "Moyenne de ligue",
                  itemStyle: {
                    color: "#fbb034",
                  },
                },
              ],
            },
          ],
        };
        myChart1.setOption(option1);
        break;
      case "CREATE_CHART_RADAR2":
        const myChart2 = echarts.init(
          document.getElementById("chart-deffensive")
        );
        const option2 = {
          legend: {
            data: ["RSB Berkane", "Moyenne de ligue"],
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "Buts", max: 6500 },
              { name: "XContre", max: 16000 },
              { name: "Tirs", max: 30000 },
              { name: "Tirs cadre", max: 38000 },
              { name: "Contre Prise", max: 52000 },
              { name: "Passes Complete", max: 25000 },
              { name: "Duels Offensive ", max: 25000 },
            ],
            radius: 85,
            center: ["42%", "60%"],
          },
          series: [
            {
              type: "radar",
              areaStyle: {},

              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
                  name: "RSB Berkane",
                  itemStyle: {
                    color: "#E55C00",
                  },
                },
                {
                  value: [
                    5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
                  ],
                  name: "Moyenne de ligue",
                  itemStyle: {
                    color: "#fbb034",
                  },
                },
              ],
            },
          ],
        };
        myChart2.setOption(option2);
        break;
      case "CREATE_CHART_RADAR3":
        const myChart3 = echarts.init(
          document.getElementById("chart-generale")
        );
        const option3 = {
          legend: {
            data: ["RSB Berkane", "Moyenne de ligue"],
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "Buts", max: 6500 },
              { name: "XContre", max: 16000 },
              { name: "Tirs", max: 30000 },
              { name: "Tirs cadre", max: 38000 },
              { name: "Contre Prise", max: 52000 },
              { name: "Passes Complete", max: 25000 },
              { name: "Duels Offensive ", max: 25000 },
            ],
            radius: 85,
            center: ["42%", "60%"],
          },
          series: [
            {
              type: "radar",
              areaStyle: {},
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
                  name: "RSB Berkane",
                  itemStyle: {
                    color: "#E55C00",
                  },
                },
                {
                  value: [
                    5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
                  ],
                  name: "Moyenne de ligue",
                  itemStyle: {
                    color: "#fbb034",
                  },
                },
              ],
            },
          ],
        };
        myChart3.setOption(option3);
        break;
      case "CREATE_CHART_SCATTER1":
        const myChart4 = echarts.init(
          document.getElementById("chart-efficacite")
        );
        const option4 = {
          grid: {
            left: 40,
            top:25,
            right:25,
             bottom: 40,
          },
        
          xAxis: {
            name: 'X',
            nameLocation: 'middle',
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + '';
              }
            },
          },
          yAxis: {
            name: 'Y',
            nameLocation: 'center', // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ''; // Customize Y axis label formatting if needed
              }
            },
          },
            tooltip: {
            trigger: 'item',
            formatter: function(params) {
             if (params.value && params.value.length === 2) {
                var imageUrl = 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384';
                return '<img src="' + imageUrl + '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>'
                  + '<br>X: ' + params.value[0] + '<br>Y: ' + params.value[1];
              }
              // Default tooltip content
              return params.data.label || '';
            }
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
               position: 'top',
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: 'cluster',
                  itemStyle: {
                    color: 'red' // Set the desired color for this specific data point
                  }
                },
                {
                  value: [0.35508, 4.957587],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value: [-0.993756, -0.884433],
                  label: 'cluster',
                  itemStyle: {
                    color: '#37A2DA' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-4.366462, 4.023316],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.565978, -1.256985],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [0.845762, -3.589788],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.79108, -2.184517],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.910108, 4.166946],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [0.421993, -2.372646],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [0.639276, -3.41284],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-0.559558, -3.840539],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.414343, 4.007573],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-2.0782973, 2.552013],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-2.078173, 2.552013],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },{
                  value: [-3.912363, 1.325108],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },{
                  value:  [2.441611, 0.444826],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
              ],
              type: 'scatter'
            }
        
          ]
        };

        myChart4.setOption(option4);
        break;
      case "CREATE_CHART_SCATTER2":
        const myChart5 = echarts.init(document.getElementById("chart-defensive"));
        const option5 = {
          grid: {
            left: 40,
            top:25,
            right:25,
             bottom: 40,
          },
        
          xAxis: {
            name: 'X',
            nameLocation: 'middle',
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + '';
              }
            },
          },
          yAxis: {
            name: 'Y',
            nameLocation: 'center', // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ''; // Customize Y axis label formatting if needed
              }
            },
          },
            tooltip: {
            trigger: 'item',
            formatter: function(params) {
             if (params.value && params.value.length === 2) {
                var imageUrl = 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384';
                return '<img src="' + imageUrl + '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>'
                  + '<br>X: ' + params.value[0] + '<br>Y: ' + params.value[1];
              }
              // Default tooltip content
              return params.data.label || '';
            }
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
               position: 'top',
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: 'cluster',
                  itemStyle: {
                    color: 'red' // Set the desired color for this specific data point
                  }
                },
                {
                  value: [0.35508, 4.957587],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value: [-0.993756, -0.884433],
                  label: 'cluster',
                  itemStyle: {
                    color: '#37A2DA' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-4.366462, 4.023316],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.565978, -1.256985],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [0.845762, -3.589788],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.79108, -2.184517],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.910108, 4.166946],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [0.421993, -2.372646],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [0.639276, -3.41284],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-0.559558, -3.840539],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.414343, 4.007573],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-2.0782973, 2.552013],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-2.078173, 2.552013],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },{
                  value: [-3.912363, 1.325108],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },{
                  value:  [2.441611, 0.444826],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
              ],
              type: 'scatter'
            }
        
          ]
        };
        myChart5.setOption(option5);
        break;
      case "CREATE_CHART_SCATTER3":
        const myChart6 = echarts.init(document.getElementById("chart-passes"));
        const option6 = {
          grid: {
            left: 40,
            top:25,
            right:25,
             bottom: 40,
          },
          xAxis: {
            name: 'X',
            nameLocation: 'middle',
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + '';
              }
            },
          },
          yAxis: {
            name: 'Y',
            nameLocation: 'center', // Position of Y axis title
            nameTextStyle: {
              fontSize: 15,
            },
            axisLabel: {
              formatter: function (value) {
                return value + ''; // Customize Y axis label formatting if needed
              }
            },
          },
            tooltip: {
            trigger: 'item',
            formatter: function(params) {
             if (params.value && params.value.length === 2) {
                var imageUrl = 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384';
                return '<img src="' + imageUrl + '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>'
                  + '<br>X: ' + params.value[0] + '<br>Y: ' + params.value[1];
              }
              // Default tooltip content
              return params.data.label || '';
            }
          },
          series: [
            {
              symbolSize: 15,
              datasetIndex: 1,
               position: 'top',
              data: [
                {
                  value: [1.35508, 2.957587],
                  label: 'cluster',
                  itemStyle: {
                    color: 'red' // Set the desired color for this specific data point
                  }
                },
                {
                  value: [0.35508, 4.957587],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value: [-0.993756, -0.884433],
                  label: 'cluster',
                  itemStyle: {
                    color: '#37A2DA' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-4.366462, 4.023316],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.565978, -1.256985],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [0.845762, -3.589788],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.79108, -2.184517],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: '#e06343' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-3.344465, 2.603513],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },{
                  value:  [-1.910108, 4.166946],
                  label: 'cluster',
                  itemStyle: {
                    color: 'black' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [0.421993, -2.372646],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [0.639276, -3.41284],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-0.559558, -3.840539],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-3.414343, 4.007573],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-2.0782973, 2.552013],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
                {
                  value:  [-2.078173, 2.552013],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },{
                  value: [-3.912363, 1.325108],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },{
                  value:  [2.441611, 0.444826],
                  label: 'cluster',
                  itemStyle: {
                    color: 'green' // Set the desired color for this specific data point
                  }
                },
              ],
              type: 'scatter'
            }
        
          ]
        };
        myChart6.setOption(option6);
        break;

      case "UPDATE_CHART":
        break;
      // case "GET":
      //   this.TeamService.One(this.ID, this.PLAYER_ID).subscribe(
      //     (RES: any) => {
      //       this.dataSource = RES;
      //       this.isLoading = false;
      //       this.COLORS = RES?.Option?.colors;
      //       this.chart = {
      //         title: RES?.Option?.title?.text,
      //         legend: RES?.Option?.legend?.data,
      //       };
      //       delete RES?.Option?.title?.text;
      //       delete RES?.Option?.legend;

      //       this.actions("CREATE_CHART_RADAR1", RES?.Option1);
      //     },
      //     (ERROR: HttpErrorResponse) => {
      //       this.isLoading = false;
      //     }
      //   );
      // break;
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }
}
