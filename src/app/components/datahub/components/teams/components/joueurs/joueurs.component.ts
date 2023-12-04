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
  imageUrl : string = 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384';
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
       // echarts.registerTransform(transform.clustering);
        // echarts.registerTransform(ecStat.transform.clustering);
        const myChart1 = echarts.init(
          document.getElementById("chart-maitrise")
        );
     // var COLOR_ALL = [
//   '#37A2DA',
//   '#e06343',
//   '#37a354',
//   '#b55dba',
//   '#b5bd48',
//   '#8378EA',
//   '#96BFFF'
// ];
const option1 = {
  grid: {
    left: 40,
    top:10,
    right:20,
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
        myChart1.setOption(option1);
        break;
      case "CREATE_CHART_SCATTER2":
        const myChart2 = echarts.init(
          document.getElementById("chart-defenseur")
        );
      // var COLOR_ALL = [
//   '#37A2DA',
//   '#e06343',
//   '#37a354',
//   '#b55dba',
//   '#b5bd48',
//   '#8378EA',
//   '#96BFFF'
// ];
const option2 = {
  grid: {
    left: 40,
    top:10,
    right:20,
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
        myChart2.setOption(option2);
        break;
      case "CREATE_CHART_SCATTER3":
        const myChart3 = echarts.init(document.getElementById("chart-gardian"));
      // var COLOR_ALL = [
//   '#37A2DA',
//   '#e06343',
//   '#37a354',
//   '#b55dba',
//   '#b5bd48',
//   '#8378EA',
//   '#96BFFF'
// ];
const option3 = {
  grid: {
    left: 40,
    top:10,
    right:20,
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
        myChart3.setOption(option3);
        break;
      case "CREATE_CHART_SCATTER4":
        const myChart4 = echarts.init(
          document.getElementById("chart-maitrise1")
        );
   // var COLOR_ALL = [
//   '#37A2DA',
//   '#e06343',
//   '#37a354',
//   '#b55dba',
//   '#b5bd48',
//   '#8378EA',
//   '#96BFFF'
// ];
const option4 = {
  grid: {
    left: 40,
    top:10,
    right:20,
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
      case "CREATE_CHART_SCATTER5":
        const myChart5 = echarts.init(
          document.getElementById("chart-gardian1")
        );
     // var COLOR_ALL = [
//   '#37A2DA',
//   '#e06343',
//   '#37a354',
//   '#b55dba',
//   '#b5bd48',
//   '#8378EA',
//   '#96BFFF'
// ];
const option5 = {
  grid: {
    left: 40,
    top:10,
    right:20,
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
      case "CREATE_CHART_SCATTER6":
        const myChart6 = echarts.init(
          document.getElementById("chart-defenseur1")
        );
      // var COLOR_ALL = [
//   '#37A2DA',
//   '#e06343',
//   '#37a354',
//   '#b55dba',
//   '#b5bd48',
//   '#8378EA',
//   '#96BFFF'
// ];
const option6 = {
  grid: {
    left: 40,
    top:10,
    right:20,
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

      case "DO_FILTER":
        break;

      default:
        break;
    }
  }
}
