import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../service/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prochain-adversaire',
  templateUrl: './prochain-adversaire.component.html',
  styleUrls: ['./prochain-adversaire.component.css']
})
export class ProchainAdversaireComponent implements OnInit {

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
    this.actions("CREATE_CHART_RADAR1");
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        const myChart1 = echarts.init(document.getElementById("chart-general"));
        const option1 ={
          legend: {
            data: ['RSB Berkane', 'Moyenne de ligne']
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: 'Buts', max: 6500 },
              { name: 'XContre', max: 16000 },
              { name: 'Tirs', max: 30000 },
              { name: 'Tirs cadre', max: 38000 },
              { name: 'Contre Prise', max: 52000 },
              { name: 'Passes Complete', max: 25000 },
              { name: 'Duels Offensive ', max: 25000 }
            ],
            radius: 100,
            center: ['50%', '60%'],
          },
          series: [
            {
              type: 'radar',
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000,],
                  name: 'RSB Berkane'
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,],
                  name: 'Moyenne de ligne'
                }
              ]
            }
          ]
        }
        myChart1.setOption(option1);
      break;


   
  
        

      case "UPDATE_CHART":
        break;
      // case "GET":
      //   this.TeamService.One(this.ID, this.PLAYER_ID).subscribe(
      //     (RES: any) => {
      //       this.dataSource = RES;
      //       this.isLoading = false;
      //       this.COLORS = RES?.Option?.colors;
      //       this.chart = {
      //         title: RES?.Option?.title?.text,
      //         legend: RES?.Option?.legend?.data,
      //       };
      //       delete RES?.Option?.title?.text;
      //       delete RES?.Option?.legend;

      //       this.actions("CREATE_CHART_RADAR1", RES?.Option1);
      //     },
      //     (ERROR: HttpErrorResponse) => {
      //       this.isLoading = false;
      //     }
      //   );
      // break;
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }


}
