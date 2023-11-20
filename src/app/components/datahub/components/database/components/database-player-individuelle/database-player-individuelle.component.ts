import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { DatabaseService } from "../../service/database.service";
import { ActivatedRoute } from "@angular/router";
import * as echarts from "echarts";
import { PlayerService } from "src/app/services/player.service";
import { Subscription } from "rxjs";
import { CharedService } from "src/app/services/chared.service";

@Component({
  selector: "app-database-player-individuelle",
  templateUrl: "./database-player-individuelle.component.html",
  styleUrls: ["./database-player-individuelle.component.css"],
})
export class DatabasePlayerIndividuelleComponent implements OnInit {
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  datapresence = []
  chart: any = {
    title: null,
    legend: [],
  };
  type_chart: string = 'pie';
  PLAYER_ID: number = null;
  @ViewChild('canvasContainers', { read: ElementRef }) canvasContainers: ElementRef;
  @ViewChild('canvasEntrainment', { read: ElementRef }) canvasEntrainment: ElementRef;
  dataSource: any = {};
  constructor(
    private renderer: Renderer2,
    private charedService: CharedService,
    private rankingService: DatabaseService,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) { }
  countPresence = {
    présent: 0,
    absent: 0,
    exclu: 0,
    "en retard": 0,
    blessé: 0,
    malade: 0,
    exempté: 0,
    adapté: 0,
  };
  trainingSub: Subscription;
  ngOnDestroy(): void {
    this.trainingSub.unsubscribe()
  }
  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    this.actions("GET");
    this.actions("chart");
    this.trainingSub = this.playerService.getUpdatedTrainingsListner().subscribe(
      (result: any) => {
        Object.keys(this.countPresence).forEach(key => {
          this.countPresence[key] = 0;
        })

        for (let training of result) {
          this.countPresence[training.status]++;
        }

        Object.keys(this.countPresence).forEach(key => {
          // this.countPresence[key] = 0;
          this.datapresence.push({ value: this.countPresence[key], name: key })
        })
        this.datapresence = this.datapresence.filter(({ value }) => value > 0);
        const chartDiv = this.renderer.createElement('div');
        chartDiv.className = `chart_one d-flex justify-content-center align-items-center col-12 col-md-12 p-0`;


        const canvas = this.renderer.createElement('canvas')// document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '400px';
        const myChart = echarts.init(canvas as any);
        // const myChart = echarts.init(chartDiv);
        myChart.resize({ width: this.charedService.DetectIsMobile() ? 350 : 800, silent: true });

        myChart.setOption({
          title: [
            {
              text: "Rapport de présence",
              bottom: 0,
              left: "center",
              show: true,
            }
          ],

          label: {
            show: true,
            // position:'inside',
            formatter: `{b}: {c}`, // {b} represents the name, {c} represents the value, and {d}% represents the percentage
          },
          legend: {
            // orient: "vertical",
            left: "center",
            // show: false,
          },
          series: [
            {
              name: "tags",
              type: "pie",
              // radius: ['30%', '50%'],
              radius: "70%",
              data: this.datapresence,
              labelLine: {
                show: false
              },
              label: {
                show: true,
                formatter: function (params) {
                  // Check if the value is greater than 1
                  if (params.data.value > 0) {
                    return params.name + ': ' + params.data.value; // Display the label
                  } else {
                    return ''; // Hide the label
                  }
                }
                // position: 'inside'
              },
              emphasis: {
                label: {
                  show: true, // Show labels when hovering
                  fontWeight: "bold",
                  formatter: `{b}:\n {c} ({d}%)`,
                },
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
              center: ["40%", "50%"],
            },
          ],
          width: "100%",
        });
        this.renderer.appendChild(chartDiv, canvas);
        this.renderer.appendChild(this.canvasEntrainment.nativeElement, chartDiv)

      }
    );

    this.playerService.getTrainings(this.PLAYER_ID);

  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'TYPE_CHART':
        this.type_chart = RES;
        setTimeout(() => {
          this.actions("CREATE_CHART_RADAR", this.dataSource?.graphs.find(e => e.type === RES));
        }, 100);
        break
      case 'chart':
        // this.isLoadingcharts[0] = true;
 
        break;
      case 'create-charts':
        RES?.forEach((chart, index) => {
          // Create a parent div element for the canvas
          if ([null, undefined].includes(chart?.option))
            return;
          const chartDiv = this.renderer.createElement('div');
          if (chart.name?.includes("tags"))
            chartDiv.className = `chart_one d-flex justify-content-center align-items-center col-12 col-md-6 p-0`;
          else
            chartDiv.className = `chart_one d-flex justify-content-center align-items-center  col-12 col-md-6 p-0`;
          chartDiv.className += index;

          const canvas = this.renderer.createElement('main')// document.createElement('canvas');
          canvas.style.width = '100%';
          canvas.style["min-width"] = '100%';
          canvas.style.height = '500px';
          const myChart = echarts.init(canvas as any);
          // const myChart = echarts.init(chartDiv);
          myChart.resize({ width: this.charedService.DetectIsMobile() ? 350 : 800, silent: true });
          // myChart.resize();
          myChart.setOption(chart?.option);
          const title = this.renderer.createElement('h6');
          title.className = `text-center`
          this.renderer.setProperty(title, "innerHTML", chart.name);
          this.renderer.appendChild(chartDiv, canvas);
          this.renderer.appendChild(this.canvasContainers.nativeElement, chartDiv);
        });

        break;
      case "CREATE_CHART_RADAR":
        const myChart1 = echarts.init(
          document.getElementById("radar-percentilles-" + this.type_chart)
        );
        myChart1.setOption(RES?.option);
        break;

      case "CREATE_CHART_SCATTER":
        const myChart2 = echarts.init(
          document.getElementById(RES.id)
        );
        // prettier-ignore
        const option2 = {
          xAxis: {},
          yAxis: {
            show: false,
          },
          series: [
            {
              symbolSize: 10,
              data: [
                {
                  value: [1, 2.04],
                  itemStyle: { color: 'blue' },

                },
                {
                  value: [1.1, 2.04],
                  itemStyle: { color: 'blue' },

                },

                {
                  value: [8.07, 6.95],
                  itemStyle: { color: 'red' },

                },
                {
                  value: [11.0, 8.04],
                  itemStyle: { color: 'green' },

                },
                // ... (continue with other data points)
              ],
              type: 'scatter'
            }
          ]
        };


        myChart2.setOption(option2);
        break;

      case "GET":
        this.isLoading = true;
        this.rankingService.TabOne('player-individuelle', this.PLAYER_ID).subscribe(
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
            this.actions("CREATE_CHART_RADAR", RES?.graphs.find(e => e.type === this.type_chart));
            this.actions("CREATE_CHART_SCATTER", { id: "chart-scatter1", ...RES?.Option2 });
            this.actions("CREATE_CHART_SCATTER", { id: "chart-scatter2", ...RES?.Option2 });
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
