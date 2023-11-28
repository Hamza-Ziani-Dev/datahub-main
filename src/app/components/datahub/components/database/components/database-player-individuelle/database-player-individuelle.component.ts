import { HttpErrorResponse } from "@angular/common/http";
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { DatabaseService } from "../../service/database.service";
import { ActivatedRoute } from "@angular/router";
import * as echarts from "echarts";
import { PlayerService } from "src/app/services/player.service";
import { Subscription } from "rxjs";
import { CharedService } from "src/app/services/chared.service";
import { statisticsService } from "src/app/services/statistics.service";

@Component({
  selector: "app-database-player-individuelle",
  templateUrl: "./database-player-individuelle.component.html",
  styleUrls: ["./database-player-individuelle.component.css"],
})
export class DatabasePlayerIndividuelleComponent implements OnInit {
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  DUREE: number = 0;
  datapresence = []
  chart: any = {
    title: null,
    legend: [],
  };
  CHART_TYPES: any[] = [];
  type_chart: string = 'pie';
  PLAYER_ID: number = null;
  ID: number = null;
  @ViewChild('canvasContainers', { read: ElementRef }) canvasContainers: ElementRef;
  @ViewChild('canvasEntrainment', { read: ElementRef }) canvasEntrainment: ElementRef;
  dataSource: any = {};
  constructor(
    private statistics: statisticsService,
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
    this.ID = this.route.snapshot.parent?.params.id;
    this.actions("GET");
    this.actions("chart");
    this.trainingSub = this.playerService.getUpdatedTrainingsDatabaseListner().subscribe(
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
        // const chartDivContainer = this.renderer.createElement('div');
        // chartDivContainer.className = 'p-4';
        const chartDiv = this.renderer.createElement('div');
        chartDiv.className = `chart_one ___block m-0  d-flex justify-content-center align-items-center col-12 p-0`;


        const canvas = this.renderer.createElement('canvas')// document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '500px';
        const myChart = echarts.init(canvas as any);
        // const myChart = echarts.init(chartDiv);
        myChart.resize({ width: this.charedService.DetectIsMobile() ? 350 : 690, silent: true });

        myChart.setOption({
          title: [
            {
              text: "Analyse de la Présence",
              top: 0,
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
            orient: 'horizontal',
            bottom: 'bottom'
          },
          series: [
            {
              type: "pie",
              // radius: ['30%', '50%'],
              // radius: "100%",
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
              // center: ["40%", "50%"],
            },
          ],
          width: "100%",
        });
        this.renderer.appendChild(chartDiv, canvas);
        this.renderer.appendChild(this.canvasEntrainment.nativeElement, chartDiv)

      }
    );

    this.playerService.getTrainingsDatabase(this.PLAYER_ID);
    this.rankingService.PlayerDureeTraining(this.PLAYER_ID).subscribe(
      (res: any) => {
        this.DUREE = res?.duree ?? 0;
      },
      (error: HttpErrorResponse) => { }
    )
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
        this.statistics.allWithValueChartDatabase(this.PLAYER_ID).subscribe(
          (res: any) => {
            this.actions('create-charts', res)
            // this.isLoadingcharts[0] = false;
          },
          (err: HttpErrorResponse) => {
            // this.isLoadingcharts[0] = false;
          }
        )
        break;
      case 'create-charts':
        RES?.forEach((chart, index) => {
          // Create a parent div element for the canvas
          if ([null, undefined].includes(chart?.option))
            return;
          const chartDivContainer = this.renderer.createElement('div');
          chartDivContainer.className = 'p-1 col-md-6 col-12';
          const chartDiv = this.renderer.createElement('div');
          chartDivContainer.appendChild(chartDiv);
          if (chart.name?.includes("Tags")) {
            chartDiv.className = `chart_one  ___block d-flex m-0  justify-content-center align-items-center flex-column col-12 p-0`;
            let chartDivDuree = this.renderer.createElement('div');
            chartDivDuree.innerHTML = `<div class="d-flex duree__contrainer flex-column justify-content-center align-items-center" >
            <div  style="
            font-size: 1.1rem;
            font-weight: bold;
            font-family:'Century Gothic Bold';
            "  >Temps de Présence en Minutes aux Entraînements</div>
            <div style="
            font-size: 1.3rem;
            font-weight: bold;
            font-family:'Century Gothic Bold';
            "><i class="fas fa-history mr-2"></i>${this.DUREE} Min</div>
            </div>`;
            chartDiv.appendChild(chartDivDuree);
          } else {
            chartDiv.className = `chart_one  ___block  m-0 d-flex justify-content-center align-items-center  col-12  p-0`;
          }
          chartDiv.className += index;

          const canvas = this.renderer.createElement('main')// document.createElement('canvas');
          canvas.style.width = '100%';
          canvas.style["min-width"] = '100%';
          canvas.style.height = '500px';
          const myChart = echarts.init(canvas as any);
          // const myChart = echarts.init(chartDiv);
          myChart.resize({ width: this.charedService.DetectIsMobile() ? 350 : 690, silent: true });
          // myChart.resize();
          myChart.setOption(chart?.option);
          const title = this.renderer.createElement('h6');
          title.className = `text-center`
          this.renderer.setProperty(title, "innerHTML", chart.name);
          this.renderer.appendChild(chartDiv, canvas);
          this.renderer.appendChild(this.canvasContainers.nativeElement, chartDivContainer);
        });

        break;
      case "CREATE_CHART_RADAR":
        const myChart1_ = echarts.init(document.getElementById("radar-percentilles-" + this.type_chart)
        );
        let data = RES;
        const allLabelsAndValues = Object.keys(data.option).reduce((result, category) => {
          const color = data.option[category].color;
          this.CHART_TYPES.push({ label: category, color });
          const categoryData = data.option[category].data.map(item => ({ color, name: item.name, value: item.value }));
          return result.concat(categoryData);
        }, []);
        var option = {
          angleAxis: {
            type: "category",
            data: allLabelsAndValues?.map(({ value, name }) => {
              const _name = name.split('').reduce((acc, char, index) => {
                if (index % 17 === 0) {
                  acc.push(name.substr(index, 17));
                }
                return acc;
              }, []).join('\n')
              return `${_name} \n ( ${value} )`
            }) ?? [],
            axisLabel: {
              fontSize: 13,
              fontWeight: "bold",
              align: "center",
            },
          },
          radiusAxis: {
            max: 100,
            min: 0,
          },
          polar: {},
          series: [
            {
              type: "bar",
              radius: "100%",
              data: allLabelsAndValues?.map(({ value }) => value) ?? [],
              coordinateSystem: "polar",
              name: "A",
              stack: "a",
              emphasis: {
                focus: "series",
              },

              itemStyle: {
                color: function (params) {
                  return allLabelsAndValues?.map(({ color }) => color)[params.dataIndex % allLabelsAndValues?.map(({ color }) => color).length] ?? [];
                },
                barBorderRadius: [30, 0, 10, 10],
              },
            },
          ],
        };

        myChart1_.setOption(option);

        break;


      case "CREATE_CHART_SCATTER":
        const myChart2 = echarts.init(
          document.getElementById(RES.id)
        );
        const ___data = RES.data;
        const _URL = this.URL;
        // prettier-ignore
        const option2 = {
          legend: {},
          tooltip: {
            formatter: function (params) {
              const playerData = params.data;
              const playerName = playerData?.fullname; // Replace with the actual player name from your data
              const playerImage = `${_URL}${playerData?.img_src}`; // Replace with the actual path to the player image
              return `
                <div style="width: 120px" >
                <div class="mt-2 d-flex flex-column justify-content-center align-items-center ">
                <img src="${playerImage}" style="width: 50px; height: 50px; border-radius: 50%;" />
                <div class="mt-2" ><strong>${playerName}</strong></div>
              </div>
              <br />
              <div class="d-flex justify-content-center align-items-center " >
                <i class="fas fa-history mr-2"></i>( ${playerData.value[0]} ) 
              </div>
                </div>
              `;
            }
          },
          xAxis: {},
          yAxis: {
            show: false,
          },
          series: [
            {
              data: ___data.map(({ value, img_src, itemStyle, symbolSize, fullname }) => ({
                value: [value[0], 2],
                itemStyle,
                img_src,
                symbolSize,
                fullname,
              })),
              type: 'scatter'
            }
          ]
        };

        myChart2.setOption(option2);
        break;

      case "GET":
        this.isLoading = true;
        this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = RES;
            this.isLoading = false;
            this.actions("CREATE_CHART_RADAR", this.dataSource.graphs.find(e => e.type === this.type_chart));
            this.actions("CREATE_CHART_SCATTER", { id: "chart-scatter1", data: this.dataSource.performances['Offensive Score'] });
            this.actions("CREATE_CHART_SCATTER", { id: "chart-scatter2", data: this.dataSource.performances['Defensive Score'] });
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
