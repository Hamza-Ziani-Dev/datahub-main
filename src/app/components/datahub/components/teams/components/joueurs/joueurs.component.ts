import { Component, OnInit } from "@angular/core";
import * as echarts from "echarts";
import { TeamsService } from "../../service/teams.service";
import { ActivatedRoute } from "@angular/router";
import { DialogJoueurComponent } from "../dialogs-teams/dialog-joueur/dialog-joueur.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-joueurs",
  templateUrl: "./joueurs.component.html",
  styleUrls: ["./joueurs.component.css"],
})
export class JoueursComponent implements OnInit {
  Data_Efficacite:any;
  Indice_Créativite:any;
  activeLabel: number = 1; // Initially, no label is active
  setActiveLabel(labelNumber: number) {
    this.activeLabel = labelNumber;
  }
  schema = [
    { name: "date", index: 0, text: "Equipe" },
    { name: "Per", index: 1, text: "Per" },
    { name: "PM25", index: 2, text: "Tir" },
    { name: "PM10", index: 3, text: "Buts" },
  ];
  imageUrl: string ="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  dataSource: any[] = [];
  constructor(
    private TeamService: TeamsService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
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
  openJouersEquipeDialog(type: string): void {
    let dialogData;
    switch (type) {
      case 'efficacite':
        dialogData = this.efficaciteData;
        break;
      case 'creativite':
        dialogData = this.creativiteData;
        break;
      // Add cases for other types as needed
      default:
        break;
    }

    this.dialog.open(DialogJoueurComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: { type, ...dialogData }
    });
  }

  // Assuming you have data for each section
  efficaciteData = { /* Your efficacite data here */ };
  creativiteData = { /* Your creativite data here */ };
  // Other data variables

  // openDialogWithDataType(data: any, type: string) {
  //   // console.log("type Dialog");
    
  //   const dialogRef = this.dialog.open(DialogJoueurComponent, {
  //     height: "520px",
  //     data: {
  //       type: type,
  //       data: data,
  //     },
  //     disableClose: true,
  //   });
  
  //   dialogRef.afterClosed().subscribe((result) => {
  //   });
  // }
  
  // openDialogWithType(type: string) {
  //   let data;
  //   switch (type) {
  //     case "Efficacite_Dribbleur":
  //       data = this.Data_Efficacite;
  //       break;
  //       case "Indice_Créativité":
  //         data = this.Indice_Créativite;
  //       break;
       
  //     default:
  //       break;
  //   }
  //   if (data) {
  //     this.openDialogWithDataType(data, type);
  //   } else {
  //     console.log('No Data In Dialog');
      
  //   }
  //   // console.log(data,type,'A')
  //   // if(Object.keys(data)) this.openDialogWithDataType(data, type);
  // }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_SCATTER1":
        const myChart1 = echarts.init(
          document.getElementById("chart-efficacite")
        );
        const option1 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
        myChart1.setOption(option1);
        break;
      case "CREATE_CHART_SCATTER2":
        const myChart2 = echarts.init(
          document.getElementById("chart-creativite")
        );
        const option2 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart2.setOption(option2);
        break;
      case "CREATE_CHART_SCATTER3":
        const myChart3 = echarts.init(
          document.getElementById("chart-presence-tir")
        );
        const option3 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart3.setOption(option3);
        break;
      case "CREATE_CHART_SCATTER4":
        const myChart4 = echarts.init(
          document.getElementById("chart-qualite-tir")
        );
        const option4 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart4.setOption(option4);
        break;
      case "CREATE_CHART_SCATTER5":
        const myChart5 = echarts.init(
          document.getElementById("chart-contribution-jeu")
        );
        const option5 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart5.setOption(option5);
        break;
      case "CREATE_CHART_SCATTER6":
        const myChart6 = echarts.init(
          document.getElementById("chart-polyvalence-defensive")
        );
        const option6 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart6.setOption(option6);
        break;
      case "CREATE_CHART_SCATTER7":
        const myChart7 = echarts.init(
          document.getElementById("chart-diversite-passes")
        );
        const option7 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart7.setOption(option7);
        break;
      case "CREATE_CHART_SCATTER8":
        const myChart8 = echarts.init(
          document.getElementById("chart-efficacite-domination")
        );
        const option8 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart8.setOption(option8);
        break;
      case "CREATE_CHART_SCATTER9":
        const myChart9 = echarts.init(
          document.getElementById("chart-progression-jeu")
        );
        const option9 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart9.setOption(option9);
        break;
      case "CREATE_CHART_SCATTER10":
        const myChart10 = echarts.init(
          document.getElementById("chart-limplication-creative")
        );
        const option10 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart10.setOption(option10);
        break;
      case "CREATE_CHART_SCATTER11":
        const myChart11 = echarts.init(
          document.getElementById("chart-contribution-offensive")
        );
        const option11 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart11.setOption(option11);
        break;
      case "CREATE_CHART_SCATTER12":
        const myChart12 = echarts.init(
          document.getElementById("chart-precision-passes")
        );
        const option12 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart12.setOption(option12);
        break;
      case "CREATE_CHART_SCATTER13":
        const myChart13 = echarts.init(
          document.getElementById("chart-jeu-aerien")
        );
        const option13 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart13.setOption(option13);
        break;
      case "CREATE_CHART_SCATTER14":
        const myChart14 = echarts.init(
          document.getElementById("chart-efficacite-sauvegarde")
        );
        const option14 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart14.setOption(option14);
        break;
      case "CREATE_CHART_SCATTER15":
        const myChart15 = echarts.init(
          document.getElementById("chart-controle-surface")
        );
        const option15 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
        myChart15.setOption(option15);
        break;
      case "CREATE_CHART_SCATTER16":
        const myChart16 = echarts.init(
          document.getElementById("chart-charge-defensive")
        );
        const option16 = {
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
              var imageUrl =
                "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
              return (
                '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                '<img src="' +
                imageUrl +
                '" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden;"/>' +
                param.seriesName +
                " " +
                value[0] +
                "：" +
                value[7] +
                "</div>" +
                this.schema[1].text +
                "：" +
                value[1] +
                "<br>" +
                this.schema[2].text +
                "：" +
                value[2] +
                "<br>" +
                this.schema[3].text +
                "：" +
                value[3] +
                "<br>"
              );
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
                [3, 56, 7, 63, 0.3, 14, 5, "A"],
                [4, 33, 7, 29, 0.33, 16, 6, "B"],
                [5, 42, 24, 44, 0.76, 40, 16, "X"],
                [6, 82, 58, 90, 1.77, 68, 33, "Z"],
                [7, 74, 49, 77, 1.46, 48, 27, "M"],
                [8, 78, 55, 80, 1.29, 59, 29, "L"],
                [9, 267, 216, 280, 4.8, 108, 64, "P"],
                [10, 185, 127, 216, 2.52, 61, 27, "I"],
                [11, 39, 19, 38, 0.57, 31, 15, "Y"],
                [12, 41, 11, 40, 0.43, 21, 7, "R"],
                [13, 64, 38, 74, 1.04, 46, 22, "T"],
                [14, 108, 79, 120, 1.7, 75, 41, "E"],
                [15, 108, 63, 116, 1.48, 44, 26, "W"],
                [16, 33, 6, 29, 0.34, 13, 5, "S"],
                [17, 94, 66, 110, 1.54, 62, 31, "D"],
                [18, 186, 142, 192, 3.88, 93, 79, "G"],
                [19, 57, 31, 54, 0.96, 32, 14, "U"],
                [20, 22, 8, 17, 0.48, 23, 10, "O"],
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
                [1, 91, 45, 125, 0.82, 34, 23, "HH"],
                [2, 65, 27, 78, 0.86, 45, 29, "KK"],
                [3, 83, 60, 84, 1.09, 73, 27, "PP"],
                [4, 109, 81, 121, 1.28, 68, 51, "UU"],
                [5, 106, 77, 114, 1.07, 55, 51, "EE"],
                [6, 109, 81, 121, 1.28, 68, 51, "QQ"],
                [7, 106, 77, 114, 1.07, 55, 51, "SS"],
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
