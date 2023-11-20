import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { DatabaseService } from '../../service/database.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { CharedService } from 'src/app/services/chared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-database-player-resume',
  templateUrl: './database-player-resume.component.html',
  styleUrls: ['./database-player-resume.component.css']
})
export class DatabasePlayerResumeComponent implements OnInit {

  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  datapresence = []
  chart: any = {
    title: null,
    legend: [],
  };
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
  type_chart: string = 'pie';
  PLAYER_ID: number = null;
  dataSource: any = {
    injuries: [],
    one: []
  };
  constructor(
    private playerService: PlayerService,
    private rankingService: DatabaseService,
    public charedService: CharedService,
    private route: ActivatedRoute
  ) { }
  ngOnDestroy(): void {
    this.trainingSub.unsubscribe();
  }
  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    this.actions("GET");
    this.playerService.getInjuries(this.PLAYER_ID);
    this.playerService.getUpdatedInjuriesListner().subscribe(
      (RES: any) => {
        this.dataSource = { ... this.dataSource, injuries: RES };
      })
    this.playerService.getGpsPlayer(this.PLAYER_ID).subscribe(
      (RES: any) => {
        this.actions('CREATE_CHART_BAR2', RES.duration);
      })

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
        // const myChart = echarts.init(chartDiv);
        const option = {
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
        };

        this.actions("CREATE_CHART_BAR3", option);

      }
    );

    this.playerService.getTrainings(this.PLAYER_ID);
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'TYPE_CHART':
        this.type_chart = RES;
        setTimeout(() => {
          this.actions("CREATE_CHART_RADAR", this.dataSource.one?.graphs.find(e => e.type === RES));
        }, 100);
        break
      case "CREATE_CHART_RADAR":
        const myChart1 = echarts.init(
          document.getElementById("radar-percentilles-" + this.type_chart)
        );
        myChart1.setOption(RES?.option);
        break;
      case 'CREATE_CHART_BAR2':
        const myChart2 = echarts.init(document.getElementById('chart-temps'));
        const option2 = {
          title: [
            {
              left: 'center',
              text: 'Temps de Jeu',
            },
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          xAxis: [
            {
              type: 'category',
              data: RES.map(e => e.adversaire),
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Precipitation',
              min: 0,
              axisLabel: {
                formatter: '{value} km'
              }
            },
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' km';
                }
              },
              data: RES.map(e => this.charedService.timeStringToFloat(e.value)),
            },
          ]
        };
        myChart2.setOption(option2);
        break;
      case 'CREATE_CHART_BAR3':
        const myChart3 = echarts.init(document.getElementById('chart-absence'));
        console.log(RES);
        myChart3.setOption(RES);
        break;
      case "UPDATE_CHART":
        break;
      case "GET":

        this.rankingService.TabOne('player-resume', this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = { ... this.dataSource, one: RES };
            this.isLoading = false;
            this.COLORS = RES?.Option?.colors;
            this.chart = {
              title: RES?.Option?.title?.text,
              legend: RES?.Option?.legend?.data,
            };
            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;

            this.actions('TYPE_CHART', 'pie');
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
