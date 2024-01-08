import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { TeamsService } from "../../service/teams.service";
import { ActivatedRoute } from "@angular/router";
import { DialogEquipeComponent } from "../dialogs-teams/dialog-equipe/dialog-equipe.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.css"],
})
export class EquipeComponent implements OnInit {
  isLoading: boolean = true;
  URL1: string =
    "https://seeklogo.com/images/R/raja-club-athletic-rca-logo-2C8B83D406-seeklogo.com.png";
  URL2: string =
    "https://seeklogo.com/images/R/renaissance-sportive-berkane-rsb-logo-9B110745FD-seeklogo.com.png";
  URL3: string =
    "https://seeklogo.com/images/I/ittihad-riadi-tanger-irt-logo-2C4CC93241-seeklogo.com.png";
  URL4: string =
    "https://seeklogo.com/images/W/wac-wydad-athletic-club-of-casablanca-2022-logo-67FEE5AE5E-seeklogo.com.png";
  URL5: string =
    "https://seeklogo.com/images/K/kenitra-athletic-club-kac-logo-7470E9B48E-seeklogo.com.png";
  URL6: string =
    "https://seeklogo.com/images/F/fus-rabat-logo-496BE80C22-seeklogo.com.png";
  URL7: string =
    "https://seeklogo.com/images/F/FAR_Rabat-logo-E1B8C5011D-seeklogo.com.png";
  URL8: string =
    "https://seeklogo.com/images/M/mat-moghreb-atletico-tetouan-logo-4E8E13EEA5-seeklogo.com.png";
  URL9: string =
    "https://seeklogo.com/images/M/maghreb-association-sportive-de-fez-mas-logo-D6AA7B92EB-seeklogo.com.png";
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  ID: number = null;
  chart: any = {
    title: null,
    legend: [],
  };
  dataSource: any[] = [];
  dataGraphsEquipe: any;
  attackingData: any;
  dataOffensive: any;
  dataDeffensive: any;
  dataGenerale: any;
  dataEfficacite_Offensive: any;
  dataEfficacite_Deffensive: any;
  dataPasses: any;
  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getGraphOffensive();
    this.actions("CREATE_CHART_SCATTER1");
    this.actions("CREATE_CHART_SCATTER2");
    this.actions("CREATE_CHART_SCATTER3");
  }
  getGraphOffensive() {
    this.teamService.getGraphsEquipe().subscribe((res) => {
      this.dataGraphsEquipe = res;
      this.actions("CREATE_CHART_RADAR1");
      this.actions("CREATE_CHART_RADAR2");
      this.actions("CREATE_CHART_RADAR3");
    });
  }

  openDialogWithDataType(data: any, type: string) {
    const dialogRef = this.dialog.open(DialogEquipeComponent, {
      height: "520px",
      data: {
        type: type,
        data: data,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialogWithType(type: string) {
    console.log("Call Dialog");
    let data;
    switch (type) {
      case "Offensive":
        data = this.dataGraphsEquipe;
        break;
      case "Deffensive":
        data = this.dataGraphsEquipe;
        break;
      case "Generale":
        data = this.dataGraphsEquipe;
        break;
      case "Efficacite_Offensive":
        data = this.dataEfficacite_Offensive;
        break;
      case "Efficacite_Deffensive":
        data = this.dataEfficacite_Deffensive;
        break;
      case "Efficacite_Passes":
        data = this.dataPasses;
        break;
      default:
        break;
    }
    if (data) {
      this.openDialogWithDataType(data, type);
    } else {
      console.log("No Data In Dialog");
    }
    // console.log(data,type,'A')
    // if(Object.keys(data)) this.openDialogWithDataType(data, type);
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        const myChart1 = echarts.init(
          document.getElementById("chart-offensive")
        );
        myChart1.setOption(this.dataGraphsEquipe?.attacking);
        break;
      case "CREATE_CHART_RADAR2":
        const myChart2 = echarts.init(
          document.getElementById("chart-deffensive")
        );

        myChart2.setOption(this.dataGraphsEquipe?.defending);
        break;
      case "CREATE_CHART_RADAR3":
        const myChart3 = echarts.init(
          document.getElementById("chart-generale")
        );
        myChart3.setOption(this.dataGraphsEquipe?.general);
        break;

      // case "CREATE_CHART_RADAR3":
      //   const myChart3 = echarts.init(
      //     document.getElementById("chart-generale")
      //   );
      //   const option3 = {
      //     legend: {
      //       data: ["RSB Berkane", "Moyenne de ligue"],
      //     },
      //     radar: {
      //       // shape: 'circle',
      //       indicator: [
      //         { name: "Buts", max: 6500 },
      //         { name: "XContre", max: 16000 },
      //         { name: "Tirs", max: 30000 },
      //         { name: "Tirs cadre", max: 38000 },
      //         { name: "Contre Prise", max: 52000 },
      //         { name: "Passes Complete", max: 25000 },
      //         { name: "Duels Offensive ", max: 25000 },
      //       ],
      //       radius: 85,
      //       center: ["42%", "60%"],
      //     },
      //     series: [
      //       {
      //         type: "radar",
      //         areaStyle: {},
      //         data: [
      //           {
      //             value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
      //             name: "RSB Berkane",
      //             itemStyle: {
      //               color: "#E55C00",
      //             },
      //           },
      //           {
      //             value: [
      //               5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
      //             ],
      //             name: "Moyenne de ligue",
      //             itemStyle: {
      //               color: "#fbb034",
      //             },
      //           },
      //         ],
      //       },
      //     ],
      //   };
      //   myChart3.setOption(option3);
      //   break;
      case "CREATE_CHART_SCATTER1":
        const myChart4 = echarts.init(
          document.getElementById("chart-efficacite")
        );
        const option4 = {
          xAxis: {},
          yAxis: {},
          title: {
            text: "Aerial Duel Win Ratio %",
            left: "center",
            bottom: 10,
            textStyle: {
              fontWeight: "bold", // Font weight
              fontSize: 14, // Font size in pixels
            },
          },
          tooltip: {
            formatter: function (params) {
              // return `
              //       <div style="width: 10px" >
              //       <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
              //        Logo
              //       </div>
              //       </div>
              // `;
            },
          },
          series: [
            {
              data: [
                {
                  value: [90, 90, "RCA"],
                  name: "RCA",
                  symbol: `image://${this.URL1}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [80, 86, "RSB"],
                  name: "RSB",
                  symbol: `image://${this.URL2}`,
                  symbolSize: [20, 20],
                },

                {
                  value: [40, 40, "IRT"],
                  name: "IRT",
                  symbol: `image://${this.URL3}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [83, 87, "WAC"],
                  name: "WAC",
                  symbol: `image://${this.URL4}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [10, 20, "KAC"],
                  name: "KAC",
                  symbol: `image://${this.URL5}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [49, 43, "FUS"],
                  name: "FUS",
                  symbol: `image://${this.URL6}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [59, 26, "FAR"],
                  name: "FAR",
                  symbol: `image://${this.URL7}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [14, 40, "MAT"],
                  name: "MAT",
                  symbol: `image://${this.URL8}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [32, 70, "MAS"],
                  name: "MAS",
                  symbol: `image://${this.URL9}`,
                  symbolSize: [20, 20],
                },
              ],
              type: "scatter",
              name: "Title",
              stack: "Total",
              itemStyle: {},
              emphasis: {
                focus: "self",
              },
            },
          ],
        };
        myChart4.setOption(option4);
        break;
      case "CREATE_CHART_SCATTER2":
        const myChart5 = echarts.init(
          document.getElementById("chart-defensive")
        );
        const option5 = {
          xAxis: {},
          yAxis: {},
          title: {
            text: "Aerial Duel Win Ratio %",
            left: "center",
            bottom: 10,
            textStyle: {
              fontWeight: "bold", // Font weight
              fontSize: 14, // Font size in pixels
            },
          },
          tooltip: {
            formatter: function (params) {
              // return `
              //       <div style="width: 120px" >
              //       <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
              //        Logo
              //       </div>
              //       </div>
              // `;
            },
          },
          series: [
            {
              data: [
                {
                  value: [90, 90, "RCA"],
                  name: "RCA",
                  symbol: `image://${this.URL1}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [80, 86, "RSB"],
                  name: "RSB",
                  symbol: `image://${this.URL2}`,
                  symbolSize: [20, 20],
                },

                {
                  value: [40, 40, "IRT"],
                  name: "IRT",
                  symbol: `image://${this.URL3}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [83, 87, "WAC"],
                  name: "WAC",
                  symbol: `image://${this.URL4}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [10, 20, "KAC"],
                  name: "KAC",
                  symbol: `image://${this.URL5}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [49, 43, "FUS"],
                  name: "FUS",
                  symbol: `image://${this.URL6}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [59, 26, "FAR"],
                  name: "FAR",
                  symbol: `image://${this.URL7}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [14, 40, "MAT"],
                  name: "MAT",
                  symbol: `image://${this.URL8}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [32, 70, "MAS"],
                  name: "MAS",
                  symbol: `image://${this.URL9}`,
                  symbolSize: [20, 20],
                },
              ],
              type: "scatter",
              name: "Title",
              stack: "Total",
              itemStyle: {},
              emphasis: {
                focus: "self",
              },
            },
          ],
        };
        myChart5.setOption(option5);
        break;
      case "CREATE_CHART_SCATTER3":
        const myChart6 = echarts.init(document.getElementById("chart-passes"));
        const option6 = {
          xAxis: {},
          yAxis: {},
          title: {
            text: "Aerial Duel Win Ratio %",
            left: "center",
            bottom: 10,
            textStyle: {
              fontWeight: "bold", // Font weight
              fontSize: 14, // Font size in pixels
            },
          },
          tooltip: {
            formatter: function (params) {
              // return `
              //       <div style="width: 120px" >
              //       <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
              //        Logo
              //       </div>
              //       </div>
              // `;
            },
          },
          series: [
            {
              data: [
                {
                  value: [90, 90, "RCA"],
                  name: "RCA",
                  symbol: `image://${this.URL1}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [80, 86, "RSB"],
                  name: "RSB",
                  symbol: `image://${this.URL2}`,
                  symbolSize: [20, 20],
                },

                {
                  value: [40, 40, "IRT"],
                  name: "IRT",
                  symbol: `image://${this.URL3}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [83, 87, "WAC"],
                  name: "WAC",
                  symbol: `image://${this.URL4}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [10, 20, "KAC"],
                  name: "KAC",
                  symbol: `image://${this.URL5}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [49, 43, "FUS"],
                  name: "FUS",
                  symbol: `image://${this.URL6}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [59, 26, "FAR"],
                  name: "FAR",
                  symbol: `image://${this.URL7}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [14, 40, "MAT"],
                  name: "MAT",
                  symbol: `image://${this.URL8}`,
                  symbolSize: [20, 20],
                },
                {
                  value: [32, 70, "MAS"],
                  name: "MAS",
                  symbol: `image://${this.URL9}`,
                  symbolSize: [20, 20],
                },
              ],
              type: "scatter",
              name: "Title",
              stack: "Total",
              itemStyle: {},
              emphasis: {
                focus: "self",
              },
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
