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
  datapresence = [];
  injuriesType = [];
  leftSideInjuries = [];
  rightSideInjuries = [];
  dataPlayer = [
    {
        "minutes_played": {
          "label": "Minutes jou\u00e9es",
          "player_value": 288,
          "league_value": 515.2
        },
        "xG": {
          "label": "xG",
          "player_value": 0.0,
          "league_value": 0.0
        },
        "Tirs": {
          "label": "Tirs",
          "player_value": 0.0,
          "league_value": 0.30000000000000004
        },
        "qualite_tir": {
          "label": "xG/Tir",
          "player_value": 0.0,
          "league_value": 0.1
        },
        "touches_surface": {
          "label": "Touches dans la surface",
          "player_value": 0.0,
          "league_value": 0.5
        },
        "dribbles": {
          "label": "Dribbles",
          "player_value": 0.63,
          "league_value": 0.4
        },
        "dribbles_reussis": {
          "label": "Dribbles gagn\u00e9s",
          "player_value": 100.0,
          "league_value": 52.4
        },
        "actions_def": {
          "label": "Actions D\u00e9fensives",
          "player_value": 11.88,
          "league_value": 8.1
        },
        "aerial_duels": {
          "label": "Duels A\u00e9riens",
          "player_value": 1.88,
          "league_value": 2.4
        },
        "interceptions": {
          "label": "Interceptions",
          "player_value": 5.63,
          "league_value": 4.5
        },
        "passes_prog": {
          "label": "Passes Prog",
          "player_value": 10.0,
          "league_value": 7.3
        },
        "passes_surface": {
          "label": "Passes vers la surface",
          "player_value": 0.31,
          "league_value": 0.5
        },
        "passes": {
          "label": "Passes",
          "player_value": 61.25,
          "league_value": 38.5
        },
        "passes_precision": {
          "label": "Passes pr\u00e9cises, %",
          "player_value": 89.29,
          "league_value": 83.3
        }
    }
]
  chart: any = {
    title: null,
    legend: [],
  };
  CHART_TYPES: any[] = [];
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
  ID: number = null;
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
    this.ID = this.route.snapshot.parent?.params.id;
    this.actions("GET");
    this.playerService.getInjuries(this.PLAYER_ID);
    this.playerService.getUpdatedInjuriesListner().subscribe(
      (RES: any) => {
        this.dataSource = { ... this.dataSource, injuries: RES };
        this.injuriesType = [];
        this.leftSideInjuries = [];
        this.rightSideInjuries = [];
      })
    this.playerService.getGpsPlayer(this.PLAYER_ID).subscribe(
      (RES: any) => {
        this.actions('CREATE_CHART_BAR2', RES.duration);
      });

    

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
        // const myChart = echarts.init(chartDiv);
        const option = {
          title: [
            {
              text: "Rapport de présence",
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
              //center: ["40%", "50%"],
            },
          ],
          width: "100%",
        };

        this.actions("CREATE_CHART_BAR3", option);

      }
    );

    this.playerService.getTrainingsDatabase(this.PLAYER_ID);
  }

  displayedColumns: string[] = ['minite', 'buts', 'xg', 'assits'];

  

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'TYPE_CHART':
        this.type_chart = RES;
        const graphs = this.dataSource.one?.graphs.find(e => e.type === RES);
        setTimeout(() => {
          this.actions("CREATE_CHART_RADAR", graphs);
        }, 100);
        break
      case "CREATE_CHART_RADAR":
        const myChart1 = echarts.init(document.getElementById("radar-percentiles-" + this.type_chart));
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
            // data: allLabelsAndValues?.map(({ value, name }) => {
            //   const _name = name.split('').reduce((acc, char, index) => {
            //     if (index % 17 === 0) {
            //       acc.push(name.substr(index, 17));
            //     }
            //     return acc;
            //   }, []).join('\n')
            //   return `${_name} \n ( ${value} )`
            // }) ?? [],
            //  data : this.dataPlayer.forEach(player => {
            //    Object.keys(player).forEach(key => {
            //     const label = player[key].label;
            //          console.log('====================================');
            //          console.log(label);
            //          console.log('====================================');
            // });
            // }),
            data : ['Xg', 'Tirs', 'qualite_tir',
            'touches_surface', 'dribbles', 'dribbles_reussis',
            'actions_def', 'aerial_duels','interceptions','passes_prog',
            'passes_surface','passes','passes_precision'],
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
              data: allLabelsAndValues?.map(({ value }) => value) ?? [],
            //  data : this.dataPlayer.forEach(player => {
            //    Object.keys(player).forEach(key => {
            //     const value = player[key].player_value;
            //          console.log('====================================');
            //          console.log(value);
            //          console.log('====================================');
            // });
            // }),
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

        myChart1.setOption(option);

        break;
      case 'CREATE_CHART_BAR2':
        const myChart2 = echarts.init(document.getElementById('chart-temps'));
        const option2 = {
          title: [
            {
              left: 'center',
              text: RES.name || 'Temps de Jeu',
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
              axisLabel: { interval: 0, rotate: 30 },
              data: RES.data.map(e => e.adversaire),
              axisPointer: {
                type: 'shadow'
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              axisLabel: {
                formatter: '{value} min'
              }
            },
          ],
          series: [
            {
              type: 'bar',

              data: RES.data.map(e => this.charedService.timeStringToFloat(e.value)),
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


        this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.dataSource = { ... this.dataSource, one: RES };
            this.isLoading = false;
            this.actions('TYPE_CHART', 'pie');
            // this.rankingService.One(this.ID, this.PLAYER_ID).subscribe(
            //   (RES: any) => {
            //     this.dataSource = RES;
            //     this.isLoading = false;
            //     console.log("this.dataSource", this.dataSource);
            //     this.actions('TYPE_CHART', 'pie');
            //   },
            //   (ERROR: HttpErrorResponse) => {
            //     this.isLoading = false;
            //   }
            // )
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
