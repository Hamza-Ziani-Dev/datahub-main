import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../../service/teams.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TableStatistiqueFormationComponent } from 'src/app/shared/components/table-statistique-formation/table-statistique-formation.component';
import { DistributionComponent } from 'src/app/shared/components/distribution/distribution.component';
import { DefensiveComponent } from 'src/app/shared/components/defensive/defensive.component';
import { OffensiveComponent } from 'src/app/shared/components/offensive/offensive.component';

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
    private route: ActivatedRoute,
    private dialogTable : MatDialog,
    private dialogDistribution : MatDialog,
    private dialogDefensive : MatDialog,
    private dialogOffensive : MatDialog,
  ) {}

  ngOnInit() {
    this.ID = this.route.snapshot.parent?.params.id;
    this.PLAYER_ID = this.route.snapshot.parent?.params.player_id;
    console.log(this.ID, this.PLAYER_ID);
    this.actions("CREATE_CHART_RADAR1");
  }

  openDialogTable(){
   const showDialogTable = this.dialogTable.open(TableStatistiqueFormationComponent,{
    width:'100%',
   });
  }

  openDialogDistribution(){
    const showDialogDistribution = this.dialogDistribution.open(DistributionComponent,{
     width:'90%',
  
    });
   }
   
   openDialogDefensive(){
    const showDialogDeffensive = this.dialogDefensive.open(DefensiveComponent,{
     width:'100%',
    });
   }

   openDialogOffensive(){
    const showDialogOffensive = this.dialogOffensive.open(OffensiveComponent,{
     width:'100%',
    });
   }


  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        const myChart1 = echarts.init(document.getElementById("chart-general"));
        const option1 ={
          title: {
            text: 'General Performance',
            left: 'center'
          },
          legend: {
            data: ['RSB Berkane', 'Moyenne de ligne'],
            // left: 10,
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: 'Buts', max: 6500 },
              { name: 'XContre', max: 16000 },
              { name: 'Tirs', max: 30000 },
              { name: 'Tirs cadre', max: 38000 },
              { name: 'Contre Prise', max: 52000 },
              { name: 'Degagements', max: 24000 },
              { name: 'Foutes', max: 23000 }
            ],
            // radius: 100,
            center: ['50%', '50%'],
          },
          series: [
            {
              type: 'radar',
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000],
                  // name: 'RSB Berkane'
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000],
                  // name: 'Moyenne de ligne'
                }
              ]
            }
          ]
        };
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
