import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { DatabaseService } from '../../service/database.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { CharedService } from 'src/app/services/chared.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/interface/user.model';
import { authService } from 'src/app/components/auth/service/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-database-player-medicale',
  templateUrl: './database-player-medicale.component.html',
  styleUrls: ['./database-player-medicale.component.css']
})
export class DatabasePlayerMedicaleComponent implements OnInit {
  isLoading = [true, true];
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  COLORS: string[] = ['#0357A0', "#007934", "#E55C00"];
  chart: any = {
    title: null,
    legend: []
  };
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('canvas2') canvas2: ElementRef;
  dataCharts = {
    'gravityChart': null,
    'typeInjuryChart': null
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
  PLAYER_ID: number = null;
  dataSource: any[] = [];
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
  injuries = [];

  constructor(
    private playerService: PlayerService,
    private rankingService: DatabaseService,
    private route: ActivatedRoute,
    private authService: authService,
    public charedService: CharedService,
  ) { }
  user: User;
  ngOnInit() {
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    this.actions('GET');
    this.authService.getUpdatedUser()
      .subscribe(
        (result: User) => {
          this.user = result;
        })
    this.authService.getUser();
    this.injuriesSub = this.playerService.JoueurPhysiqueChart(this.PLAYER_ID).subscribe(
      (res: any) => {
        this.actions('CREATE_CHART_BIO1', res?.taille);
        this.actions('CREATE_CHART_BIO2', res?.poids);
        this.actions('CREATE_CHART_BIO3', res?.img_dexa);
        this.actions('CREATE_CHART_BIO4', res?.graisseuse);
        console.log(res);
      },
      (err: HttpErrorResponse) => { }
    )
    this.playerService.getInjuries(this.PLAYER_ID);
    this.playerService.getUpdatedInjuriesListner().subscribe(
      (RES: any) => {
        this.dataSource = RES;
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
        this.isLoading[0] = false;

        let chartvalues = [];
        let chartlabels = [];
        let backgrounds = [];
        for (let [key, value] of Object.entries(this.injuriesType)) {
          chartvalues.push(value);
          chartlabels.push(key);
          backgrounds.push(this.randomColor());
        }
        let values = [{
          label: 'Type de blessures',
          fill: true,
          backgroundColor: backgrounds,
          data: chartvalues
        }];
        this.buildChart(this.canvas.nativeElement.getContext('2d'), 'typeInjuryChart', values, chartlabels, 'doughnut');

      }
    );




  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.injuriesSub.unsubscribe()
  }
  buildChart(canvasId, chartName, values, dates, type = 'line') {
    if (this.dataCharts[chartName] == null) {
      this.dataCharts[chartName] = new Chart(canvasId, {
        type: type,
        data: {
          labels: dates,
          datasets: values
        },
        options: {
          title: {
            display: true
          }
        }
      });
    } else {
      this.dataCharts[chartName].data.labels = dates;
      this.dataCharts[chartName].data.datasets = values;
      this.dataCharts[chartName].update();
    }

  }
  randomColor() {

    // The available hex options
    var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var color = '#';

    // Create a six-digit hex color
    for (var i = 0; i < 6; i++) {

      // Shuffle the hex values
      this.shuffle(hex);

      // Append first hex value to the string
      color += hex[0];

    }

    // Return the color string
    return color;

  }
  shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case 'CREATE_CHART_BIO1':
        const myChart = echarts.init(document.getElementById('chart-biometrie1'));
        const option1 = {
          title: [
            {
              left: 'center',
              text: 'Taille CM',
            },
          ],
          xAxis: {
            data: RES.map(e => e.date)
          },
          yAxis: {
            type: 'value',
            show: false,
          },
          label: {
            show: true,
            position: 'top',
            textAlign: 'center',  // Center the text horizontally
            textBaseline: 'top'  // Align the text to the top vertically
          },
          series: [
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: RES.map(e => e.valeur)
            }
          ]
        };

        myChart.setOption(option1);
        break;
      case 'CREATE_CHART_BIO2':
        const myChart2 = echarts.init(document.getElementById('chart-biometrie2'));
        const option2 = {
          title: [
            {
              left: 'center',
              text: 'Poits (KG)'
            },
          ],
          xAxis: {
            data: RES.map(e => e.date)
          },
          yAxis: {
            type: 'value',
            show: false,
          },
          label: {
            show: true,
            position: 'top',
            textAlign: 'center',  // Center the text horizontally
            textBaseline: 'top'  // Align the text to the top vertically
          },
          series: [
            {
              name: 'poits',
              type: 'line',
              stack: 'Total',
              data: RES.map(e => e.valeur)
            }
          ]
        };
        myChart2.setOption(option2);
        break;
      case 'CREATE_CHART_BIO3':
        const myChart3 = echarts.init(document.getElementById('chart-biometrie3'));
        const option3 = {
          title: [
            {
              left: 'center',
              text: 'Masse Grasse DEXA(%)',
            },
          ],
          xAxis: {
            data: RES.map(e => e.date)
          },
          yAxis: {
            type: 'value',
            show: false,
          },
          label: {
            show: true,
            position: 'top',
            textAlign: 'center',  // Center the text horizontally
            textBaseline: 'top'  // Align the text to the top vertically
          },
          series: [
            {
              name: 'Masse Grasse',
              type: 'line',
              stack: 'Total',
              data: RES.map(e => e.valeur)
            }
          ]
        };
        myChart3.setOption(option3);
        break;
      case 'CREATE_CHART_BIO4':
        const myChart4 = echarts.init(document.getElementById('chart-biometrie4'));
        const option4 = {
          title: [
            {
              left: 'center',
              text: '% MG impédance mètrie'
            },
          ],
          xAxis: {
            data: RES.map(e => e.date)
          },
          yAxis: {
            type: 'value',
            show: false,
          },
          label: {
            show: true,
            position: 'top',
            textAlign: 'center',  // Center the text horizontally
            textBaseline: 'top'  // Align the text to the top vertically
          },
          series: [
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: RES.map(e => e.valeur)
            }
          ]
        };
        myChart4.setOption(option4);
        break;

      case 'UPDATE_CHART':

        break;
      case 'GET':
        this.rankingService.TabOne('player-medicale', this.PLAYER_ID).subscribe(
          (RES: any) => {
            this.isLoading[1] = false;
            this.COLORS = RES?.Option?.colors;
            this.chart = {
              title: RES?.Option?.title?.text,
              legend: RES?.Option?.legend?.data
            }

            delete RES?.Option?.title?.text;
            delete RES?.Option?.legend;


          },
          (ERROR: HttpErrorResponse) => {
            this.isLoading[1] = false;
          }
        )
        break;
      case 'DO_FILTER':

        break;

      default:
        break;
    }
  }



}
