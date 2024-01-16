import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { DatabaseService } from '../../service/database.service';
import { ActivatedRoute } from '@angular/router';
import { CharedService } from 'src/app/services/chared.service';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/components/auth/service/auth.service';
import { User } from 'src/app/shared/interface/user.model';
@Component({
  selector: 'app-database-player-resume',
  templateUrl: './database-player-resume.component.html',
  styleUrls: ['./database-player-resume.component.css']
})
export class DatabasePlayerResumeComponent implements OnInit {
  DUREE: number = 0;
  isLoading: boolean = true;
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ["#0357A0", "#007934", "#E55C00"];
  datapresence = []
  chart: any = {
    title: null,
    legend: [],
  };
  CHART_TYPES: any[] = [
    { label: 'Joueur', color: '#314E82' },
    { label: 'Moy. Botola', color: '#E5753C' },
  ];
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
  playerTiming: any;
  type_chart: string = 'pie';
  ID: number = null;
  PLAYER_ID: number = null;
  dataSource: any = {
    blessures: [],
    injuries: [],
    one: []
  };

  MannequinBack: string[] = ['tete', 'cou', 'dos', 'bas_du_dos', 'fessier', 'éqaule_gauche_derrière', 'éqaule_droite_derrière', 'biceps_gauche', 'biceps_droite', 'coude_gauche_derrière', 'coude_droite_derrière', 'avant-bras_gauche', 'avant-bras_droite', 'poignet_gauche', 'poignet_droite', 'dos_de_la_main_gauche', 'dos_de_la_main_droite', 'cuisse_gauche_derrière', 'cuisse_droite_derrière', 'arrière_du_genou_gauche', 'arrière_du_genou_droite', 'mollet_gauche', 'mollet_droite', 'cheville_gauche', 'cheville_droite', 'calcanéum_gauche', 'calcanéum_droite', 'pied_gauche', 'pied_droite'];

  selectedTabIndex = 0;
  muscleInjury = [
    'déchirure',
    'contusion',
    'elongation'
  ];
  tendonInjury = [
    'désinsertion partielle',
    'désinsertion totale',
    'rupture partielle',
    'rupture totale'
  ];
  articularInjury = [
    'entorse',
    'fissure',
    'fracture',
    'fracture de fatigue',
    'luxation',
    'Œdème'
  ];
  contusionInjury = [
    'plaie'
  ];
  otherInjury = [
    'abces',
    'algie dentaire',
    'adénopathie',
    'angine',
    'appendicite aigue',
    'arthrite',
    'autre',
    'bronchite',
    'bursite',
    'calcification',
    'carie dentaire',
    'céphalées',
    'chondropathie aigue',
    'chondropathie dégénérative',
    'colique hépatique',
    'colique néphrétique',
    'collection ou épanchement liquide',
    'commotion cérébrale',
    'conjonctivite',
    'corps étranger',
    'crise d\'epilepsie',
    'crise de spasmophilie',
    'dégénérescence',
    'distension ligamentaire',
    'douleur',
    'douleur abdominale sans précision',
    'epigastralgie',
    'etirement',
    'gastro-entérite aigue',
    'hématome',
    'hernie',
    'infection',
    'infection urinaire',
    'infection virale',
    'inflammation',
    'instabilité',
    'intoxication alimentaire',
    'intoxication médicamenteuse',
    'lésion',
    'maladie de croissance',
    'maladie sexuellement transmissible',
    'malaise',
    'migraines',
    'ostéo-arthrite',
    'otite',
    'pneumopathie',
    'pseudo-inflammation',
    'pubalgie',
    'rhinite',
    'rhinite Allergique',
    'rhinopharyngite',
    'rupture ligamentaire',
    'syndrome carrefour postérieur',
    'syndrome dépressif',
    'ténosynovite',
    'tensions',
    'tuméfaction',
    'tumeur',
    'ulcère gastrique ou gastrite',
    'urticaire'
  ];
  turn = 0;
  rightSideInjuries = [];
  injuriesSub: Subscription;
  muscleInjuriesCount = [];
  tendonInjuriesCount = [];
  articularInjuriesCount = [];
  contusionInjuriesCount = [];
  otherInjuriesCount = [];
  showedInjuries = [];
  injuriesType = [];
  leftSideInjuries = [];
  totalUnavailability = 0;
  noUnavailability = 0;
  lessThanWeekUnavailability = 0;
  moreThanWeekUnavailability = 0;
  gravityInjuriesCount = [
    [], [], [], [], [], []
  ];
  locationFilter = '';
  typeFilter = '';
  class_chart = 'col-md-8';
  injuries: any = [];
  constructor(
    private rankingService: DatabaseService,
    public authService: authService,
    public charedService: CharedService,
    private route: ActivatedRoute
  ) { }

  user: User;
  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    this.ID = this.route.snapshot.parent?.params.id;
    this.actions("GET");
    this.authService.getUpdatedUser()
      .subscribe(
        (result: User) => {
          this.user = result;
        })
    this.authService.getUser();
    this.rankingService.getInjuries(this.PLAYER_ID).subscribe(
      (RES: any) => {
        this.dataSource = { ... this.dataSource, injuries: RES };
      })
    this.rankingService.getGpsPlayer(this.PLAYER_ID).subscribe(
      (RES: any) => {
        this.class_chart = RES.duration.data.length > 12 ? 'col-md-12' : 'col-md-8';
        setTimeout(() => {
          this.actions('CREATE_CHART_BAR2', RES.duration);
        }, 50);
      })

    this.rankingService.getTrainingsDatabase(this.PLAYER_ID).subscribe(
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
          // title: [
          //   {
          //     text: `<h1>Analyse de la Présence</h1>`,
          //     top: 0,
          //     left: "center",
          //     show: true,
          //   }
          // ],
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



    this.rankingService.getInjuries(this.PLAYER_ID).subscribe(
      (RES: any) => {
        this.injuries = [];
        this.muscleInjuriesCount = [];
        this.tendonInjuriesCount = [];
        this.articularInjuriesCount = [];
        this.contusionInjuriesCount = [];
        this.otherInjuriesCount = [];
        this.gravityInjuriesCount = [
          [], [], [], [], [], []
        ];
        this.showedInjuries = [];
        this.injuriesType = [];
        this.leftSideInjuries = [];
        this.totalUnavailability = 0;
        this.noUnavailability = 0;
        this.lessThanWeekUnavailability = 0;
        this.moreThanWeekUnavailability = 0;
        this.rightSideInjuries = [];
        this.locationFilter = '';
        this.typeFilter = '';
        this.injuries = RES;
        for (let i = 0; i < this.injuries.length; i++) {
          this.injuries[i].moyen_recuperation = this.injuries[i]?.moyen_recuperation ? ("" + this.injuries[i]?.moyen_recuperation).split(',') : [];
          this.totalUnavailability += +this.injuries[i].date_retour_prevue * (+this.injuries[i].durre_injury || 1);
          const key = this.injuries[i].localisation;
          if (this.injuriesType[key] === undefined) {
            if (this.turn == 0) {
              this.leftSideInjuries[key] = 1;
              this.turn = 1;
            } else {
              this.rightSideInjuries[key] = 1;
              this.turn = 0;
            }
            this.injuriesType[key] = 1;
          } else {
            if (this.leftSideInjuries[key] !== undefined) {
              this.leftSideInjuries[key] += 1;
            } else {
              this.rightSideInjuries[key] += 1;
            }
            this.injuriesType[key] += 1;
          }
          if (this.injuries[i].gravity != '' && this.injuries[i].gravity != null) {
            this.gravityInjuriesCount[this.injuries[i].gravity].push(this.injuries[i].type_blessure);
          } else {
            this.gravityInjuriesCount[0].push(this.injuries[i].type_blessure);
          }
          if (this.muscleInjury.includes(this.injuries[i].type_blessure)) {
            this.muscleInjuriesCount.push(this.injuries[i].type_blessure);
          }
          if (this.tendonInjury.includes(this.injuries[i].type_blessure)) {
            this.tendonInjuriesCount.push(this.injuries[i].type_blessure);
          }
          if (this.articularInjury.includes(this.injuries[i].type_blessure)) {
            this.articularInjuriesCount.push(this.injuries[i].type_blessure);
          }
          if (this.contusionInjury.includes(this.injuries[i].type_blessure)) {
            this.contusionInjuriesCount.push(this.injuries[i].type_blessure);
          }
          if (this.otherInjury.includes(this.injuries[i].type_blessure)) {
            this.otherInjuriesCount.push(this.injuries[i].type_blessure);
          }
        }
        this.showedInjuries = [...this.injuries];
        this.showedInjuries.forEach((item, index) => {
          if (item.traitement_nom != (null || undefined)) {

            if (item.traitement_nom.toLowerCase().indexOf(this.user?.nom.toLowerCase()) != -1) {
              item.edit_traitement = true;
            } else {
              item.edit_traitement = false;
            }
          }

        });
      }
    );

    this.rankingService.PlayerDureeTraining(this.PLAYER_ID).subscribe(
      (res: any) => {
        this.DUREE = res?.duree ?? 0;
      },
      (error: HttpErrorResponse) => { }
    )

    this.rankingService.getPlayerTiming(this.PLAYER_ID).subscribe(
      (result: any) => {
        this.playerTiming = {
          titulaire: result[0]?.titulaire ?? 0,
          no_titulaire: result[0]?.no_titulaire ?? 0,
          count: result[0]?.match_total ?? 0,
          minutes: result[0]?.minutes ?? 0
        };
      }
    );
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR":
        const myChart1 = echarts.init(
          document.getElementById("radar-percentiles-" + this.type_chart)
        );
        let allLabelsAndValues = this.dataSource?.one?.recent_performance.map((e: any) => {
          return [e, ...(e?.children.length > 0 ? e?.children : [])];
        }).flat();
        allLabelsAndValues = allLabelsAndValues?.filter(({ label }) => {
          return ![
            "Touches de balle dans la surface de réparation", "Actions défensives réussies par 90", "Duels aériens gagnés", "Passes progressives", "Passes vers la surface de réparation"
          ].includes(label)
        });
        const option = {
          legend: {
            data: ["Joueur", "Moy. Poste", "Moy. Botola"],
            bottom: "0%",
            left: "center",
          },
          tooltip: {
            position: 'top',
          },
          radar: {
            indicator: allLabelsAndValues?.map(({ player_value, league_value, position_value, label }) => {
              return { name: `${label} \n ( ${player_value} |  ${league_value}  |  ${position_value} )`, color: '#000' }
            }) ?? [],
          },
          series: [
            {
              type: "radar",
              areaStyle: {},
              data: [
                {
                  value: allLabelsAndValues?.map(({ player_value }) => +player_value) ?? [],
                  name: "Joueur",
                  itemStyle: {
                    color: "#BB1A2F",
                    emphasis: {
                      label: {
                        color: "#000",
                        formatter: function (params) {
                          return `${params.value}`;
                        },
                      },
                    },
                  },
                },
                {
                  value: allLabelsAndValues?.map(({ league_value }) => +league_value) ?? [],
                  name: "Moy. Poste",
                  itemStyle: {
                    color: "#0E709A",
                    emphasis: {
                      label: {
                        color: "#000",
                        formatter: function (params) {
                          return `${params.value}`;
                        },
                      },
                    },
                  },
                },
                {
                  value: allLabelsAndValues?.map(({ position_value }) => +position_value) ?? [],
                  name: "Moy. Botola",
                  itemStyle: {
                    color: "#00CD66",
                    emphasis: {
                      label: {
                        color: "#000",
                        formatter: function (params) {
                          return `${params.value}`;
                        },
                      },
                    },
                  },
                },
              ],
            },
          ],
        };
        myChart1.setOption(option);

        break;
      case 'CREATE_CHART_BAR2':
        const myChart2 = echarts.init(document.getElementById('chart-temps'));
        const DATA = RES.data.map(e => Object({ label: e.adversaire, value: this.charedService.timeStringToFloat(e.value) }));
        const option2 = {
          title: [
            {
              left: 'center',
              text: RES.name || 'Temps de Jeu',
              textStyle: {
                fontSize: 14, // You can adjust the font size as needed
              }
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
              data: DATA.map(e => e.label),
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
              data: DATA.map(e => e.value),
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
            setTimeout(() => {
              this.actions('CREATE_CHART_RADAR');
            }, 100);
          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading = false;
          }
        )
        break;
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }
}
