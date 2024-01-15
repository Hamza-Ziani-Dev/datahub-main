import { Component, Inject, OnInit } from "@angular/core";
import { TeamsService } from "../../../service/teams.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as echarts from "echarts";
@Component({
  selector: "app-dialog-equipe",
  templateUrl: "./dialog-equipe.component.html",
  styleUrls: ["./dialog-equipe.component.css"],
})
export class DialogEquipeComponent implements OnInit {
  URL1: string ="https://seeklogo.com/images/R/raja-club-athletic-rca-logo-2C8B83D406-seeklogo.com.png";
  URL2: string ="https://seeklogo.com/images/R/renaissance-sportive-berkane-rsb-logo-9B110745FD-seeklogo.com.png";
  URL3: string ="https://seeklogo.com/images/I/ittihad-riadi-tanger-irt-logo-2C4CC93241-seeklogo.com.png";
  URL4: string ="https://seeklogo.com/images/W/wac-wydad-athletic-club-of-casablanca-2022-logo-67FEE5AE5E-seeklogo.com.png";
  URL5: string ="https://seeklogo.com/images/K/kenitra-athletic-club-kac-logo-7470E9B48E-seeklogo.com.png";
  URL6: string ="https://seeklogo.com/images/F/fus-rabat-logo-496BE80C22-seeklogo.com.png";
  URL7: string ="https://seeklogo.com/images/F/FAR_Rabat-logo-E1B8C5011D-seeklogo.com.png";
  URL8: string ="https://seeklogo.com/images/M/mat-moghreb-atletico-tetouan-logo-4E8E13EEA5-seeklogo.com.png";
  URL9: string ="https://seeklogo.com/images/M/maghreb-association-sportive-de-fez-mas-logo-D6AA7B92EB-seeklogo.com.png";
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogEquipeComponent>
  ) {}
  ngOnInit() {
    console.log(this.data);
    this.actions("CREATE_CHART_RADAR1");
    this.actions("CREATE_CHART_RADAR2");
    this.actions("CREATE_CHART_RADAR3");
    // this.actions('CREATE_CHART_SCATTER1');
    // this.actions('CREATE_CHART_SCATTER2');
    // this.actions('CREATE_CHART_SCATTER3');
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  actions(CASE, RES = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        setTimeout(() => {
          const ChartOffensive = document.getElementById("chart-offensive-dialog");
            try {
              const myChart = echarts.init(ChartOffensive);
              myChart.setOption(this.data?.data?.attacking);
            } catch (error) {
            }
        }, 200);
        break;
      case "CREATE_CHART_RADAR2":
        setTimeout(() => {
          const ChartDeffensive = document.getElementById("chart-defensive-dialog");
             try {
              const myChart = echarts.init(ChartDeffensive);
              myChart.setOption(this.data?.data?.attacking);
             } catch (error) {
             }
        }, 200);
        break;
      case "CREATE_CHART_RADAR3":
        setTimeout(() => {
          const ChartGenerale = document.getElementById("chart-generale-dialog");
             try {
              const myChart = echarts.init(ChartGenerale);
              myChart.setOption(this.data?.data?.general);
             } catch (error) {
             }
        }, 200); 
        break;
        // case "CREATE_CHART_SCATTER1":
        // setTimeout(() => {
        //   const ChartOffensive = document.getElementById("chart-efficacite-dialog");
        //   const myChart = echarts.init(ChartOffensive);
        //      try {
        //       const option = {
        //         xAxis: {},
        //         yAxis: {},
        //         title: {
        //           text: "Aerial Duel Win Ratio %",
        //           left: "center",
        //           bottom: 10,
        //           textStyle: {
        //             fontWeight: "bold", // Font weight
        //             fontSize: 14, // Font size in pixels
        //           },
        //         },
        //         tooltip: {
        //           formatter: function (params) {
        //             // return `
        //             //       <div style="width: 10px" >
        //             //       <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
        //             //        Logo
        //             //       </div>
        //             //       </div>
        //             // `;
        //           },
        //         },
        //         series: [
        //           {
        //             data: [
        //               {
        //                 value: [90, 90, "RCA"],
        //                 name: "RCA",
        //                 symbol: `image://${this.URL1}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [80, 86, "RSB"],
        //                 name: "RSB",
        //                 symbol: `image://${this.URL2}`,
        //                 symbolSize: [20, 20],
        //               },
      
        //               {
        //                 value: [40, 40, "IRT"],
        //                 name: "IRT",
        //                 symbol: `image://${this.URL3}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [83, 87, "WAC"],
        //                 name: "WAC",
        //                 symbol: `image://${this.URL4}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [10, 20, "KAC"],
        //                 name: "KAC",
        //                 symbol: `image://${this.URL5}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [49, 43, "FUS"],
        //                 name: "FUS",
        //                 symbol: `image://${this.URL6}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [59, 26, "FAR"],
        //                 name: "FAR",
        //                 symbol: `image://${this.URL7}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [14, 40, "MAT"],
        //                 name: "MAT",
        //                 symbol: `image://${this.URL8}`,
        //                 symbolSize: [20, 20],
        //               },
        //               {
        //                 value: [32, 70, "MAS"],
        //                 name: "MAS",
        //                 symbol: `image://${this.URL9}`,
        //                 symbolSize: [20, 20],
        //               },
        //             ],
        //             type: "scatter",
        //             name: "Title",
        //             stack: "Total",
        //             itemStyle: {},
        //             emphasis: {
        //               focus: "self",
        //             },
        //           },
        //         ],
        //       };
        //       myChart.setOption(option);
        //      } catch (error) {
        //      }
        // }, 200); 
        // break;
        // case "CREATE_CHART_SCATTER2":
        //   setTimeout(() => {
        //     const ChartDeffensive = document.getElementById("chart-defensive-dialog");
        //     const myChart1 = echarts.init(ChartDeffensive);
        //        try {
        //         const option = {
        //           xAxis: {},
        //           yAxis: {},
        //           title: {
        //             text: "Aerial Duel Win Ratio %",
        //             left: "center",
        //             bottom: 10,
        //             textStyle: {
        //               fontWeight: "bold", // Font weight
        //               fontSize: 14, // Font size in pixels
        //             },
        //           },
        //           tooltip: {
        //             formatter: function (params) {
        //               // return `
        //               //       <div style="width: 10px" >
        //               //       <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
        //               //        Logo
        //               //       </div>
        //               //       </div>
        //               // `;
        //             },
        //           },
        //           series: [
        //             {
        //               data: [
        //                 {
        //                   value: [90, 90, "RCA"],
        //                   name: "RCA",
        //                   symbol: `image://${this.URL1}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [80, 86, "RSB"],
        //                   name: "RSB",
        //                   symbol: `image://${this.URL2}`,
        //                   symbolSize: [20, 20],
        //                 },
        
        //                 {
        //                   value: [40, 40, "IRT"],
        //                   name: "IRT",
        //                   symbol: `image://${this.URL3}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [83, 87, "WAC"],
        //                   name: "WAC",
        //                   symbol: `image://${this.URL4}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [10, 20, "KAC"],
        //                   name: "KAC",
        //                   symbol: `image://${this.URL5}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [49, 43, "FUS"],
        //                   name: "FUS",
        //                   symbol: `image://${this.URL6}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [59, 26, "FAR"],
        //                   name: "FAR",
        //                   symbol: `image://${this.URL7}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [14, 40, "MAT"],
        //                   name: "MAT",
        //                   symbol: `image://${this.URL8}`,
        //                   symbolSize: [20, 20],
        //                 },
        //                 {
        //                   value: [32, 70, "MAS"],
        //                   name: "MAS",
        //                   symbol: `image://${this.URL9}`,
        //                   symbolSize: [20, 20],
        //                 },
        //               ],
        //               type: "scatter",
        //               name: "Title",
        //               stack: "Total",
        //               itemStyle: {},
        //               emphasis: {
        //                 focus: "self",
        //               },
        //             },
        //           ],
        //         };
        //         myChart1.setOption(option);
        //        } catch (error) {
        //        }
        //   }, 1000); 
        //   break;
        //   case "CREATE_CHART_SCATTER3":
            // setTimeout(() => {
            //   const ChartPasses = document.getElementById("chart-passes-dialog");
            // const myChart3 = echarts.init(ChartPasses);
            //      try {
            //       const option = {
            //         xAxis: {},
            //         yAxis: {},
            //         title: {
            //           text: "Aerial Duel Win Ratio %",
            //           left: "center",
            //           bottom: 10,
            //           textStyle: {
            //             fontWeight: "bold", // Font weight
            //             fontSize: 14, // Font size in pixels
            //           },
            //         },
            //         tooltip: {
            //           formatter: function (params) {
            //             // return `
            //             //       <div style="width: 10px" >
            //             //       <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
            //             //        Logo
            //             //       </div>
            //             //       </div>
            //             // `;
            //           },
            //         },
            //         series: [
            //           {
            //             data: [
            //               {
            //                 value: [90, 90, "RCA"],
            //                 name: "RCA",
            //                 symbol: `image://${this.URL1}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [80, 86, "RSB"],
            //                 name: "RSB",
            //                 symbol: `image://${this.URL2}`,
            //                 symbolSize: [20, 20],
            //               },
          
            //               {
            //                 value: [40, 40, "IRT"],
            //                 name: "IRT",
            //                 symbol: `image://${this.URL3}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [83, 87, "WAC"],
            //                 name: "WAC",
            //                 symbol: `image://${this.URL4}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [10, 20, "KAC"],
            //                 name: "KAC",
            //                 symbol: `image://${this.URL5}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [49, 43, "FUS"],
            //                 name: "FUS",
            //                 symbol: `image://${this.URL6}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [59, 26, "FAR"],
            //                 name: "FAR",
            //                 symbol: `image://${this.URL7}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [14, 40, "MAT"],
            //                 name: "MAT",
            //                 symbol: `image://${this.URL8}`,
            //                 symbolSize: [20, 20],
            //               },
            //               {
            //                 value: [32, 70, "MAS"],
            //                 name: "MAS",
            //                 symbol: `image://${this.URL9}`,
            //                 symbolSize: [20, 20],
            //               },
            //             ],
            //             type: "scatter",
            //             name: "Title",
            //             stack: "Total",
            //             itemStyle: {},
            //             emphasis: {
            //               focus: "self",
            //             },
            //           },
            //         ],
            //       };
            //       myChart3.setOption(option);
            //      } catch (error) {
            //      }
            // }, 200); 
            // break;
      default:
        break;
    }
  }
  
}
