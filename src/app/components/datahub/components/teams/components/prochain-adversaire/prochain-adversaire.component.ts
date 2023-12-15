import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../../service/teams.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TableStatistiqueFormationComponent } from 'src/app/shared/components/table-statistique-formation/table-statistique-formation.component';
import { DistributionComponent } from 'src/app/shared/components/distribution/distribution.component';
import { DefensiveComponent } from 'src/app/shared/components/defensive/defensive.component';
import { OffensiveComponent } from 'src/app/shared/components/offensive/offensive.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prochain-adversaire',
  templateUrl: './prochain-adversaire.component.html',
  styleUrls: ['./prochain-adversaire.component.css']
})
export class ProchainAdversaireComponent implements OnInit {
  fixtureInfoArray: any;
  generalInfoArray: any;
  playersOne : any;
  playersTwo : any;
  treeMapArray: any;
  radarDataArray :any;
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
    private teamService: TeamsService,
    private route: ActivatedRoute,
    private dialogTable : MatDialog,
    private dialogDistribution : MatDialog,
    private dialogDefensive : MatDialog,
    private dialogOffensive : MatDialog,
  ) {}

  ngOnInit() {
    this.actions("CREATE_CHART_RADAR1");
    this.getGeneralInfo();
    this.getFixtureInfo();
  }

 
getGeneralInfo(){
  this.teamService.getGeneralInfo().subscribe((res)=>{
    this.generalInfoArray = res;
    this.playersOne = this.generalInfoArray['key_players'][0]
    this.playersTwo = this.generalInfoArray['key_players'][1]
  })
}

getFixtureInfo(){
   this.teamService.getFixtureInfo().subscribe((res)=>{
    this.fixtureInfoArray  = res;
  })
}

getTreeMapData(){
  this.teamService.getTreeMapData().subscribe((res)=>{
    this.treeMapArray = res;
  })
}

actions(CASE: string, RES: any = null) {
  let height = '450px';
  let width = '60%';
  if (window.innerWidth < 768) { 
    height = '400px'; 
    width = '100%';
  }
  switch (CASE) {
    case 'CREATE_CHART_RADAR1':
              const myChart1 = echarts.init(document.getElementById("chart-general"));
              const option1 ={
                title: {
                  text: 'Prestation générale.',
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
    case 'UPDATE_CHART_RADAR1':
      break;
    case 'openDialogTable':
      this.openDialog(this.dialogTable, TableStatistiqueFormationComponent, width, height,'dialog-with-data', { table: 'test',position: '10px' });
      break;

    case 'openDialogDistribution':
      this.openDialog(this.dialogDistribution, DistributionComponent, width, height,'dialog-with-data', { distribution: 'test' });
      break;

    case 'openDialogDefensive':
      this.openDialog(this.dialogDefensive, DefensiveComponent, width, height ,'dialog-with-data', { defensive: 'test' });
      break;

    case 'openDialogOffensive':
      this.openDialog(this.dialogOffensive, OffensiveComponent, width, height, 'dialog-with-data',{ data: this.radarDataArray });
      break;
    default:
      break;
  }
}
openDialog(dialogInstance: any, component: any, width: string, height: string, panelClass?: string, data?: any) {
  const dialogRef = dialogInstance.open(component, {
    width: width,
    height: height,
    panelClass: panelClass || '',
    data: data || null,
    position : {top :'5px'}
  });
}


// actions(CASE: string, RES: any = null) {
//     switch (CASE) {
//       case "CREATE_CHART_RADAR1":
//         const myChart1 = echarts.init(document.getElementById("chart-general"));
//         const option1 ={
//           title: {
//             text: 'Prestation générale.',
//             left: 'center'
//           },
//           legend: {
//             data: ['RSB Berkane', 'Moyenne de ligne'],
//             // left: 10,
//           },
//           radar: {
//             // shape: 'circle',
//             indicator: [
//               { name: 'Buts', max: 6500 },
//               { name: 'XContre', max: 16000 },
//               { name: 'Tirs', max: 30000 },
//               { name: 'Tirs cadre', max: 38000 },
//               { name: 'Contre Prise', max: 52000 },
//               { name: 'Degagements', max: 24000 },
//               { name: 'Foutes', max: 23000 }
//             ],
//             // radius: 100,
//             center: ['50%', '50%'],
//           },
//           series: [
//             {
//               type: 'radar',
//               data: [
//                 {
//                   value: [4200, 3000, 20000, 35000, 50000, 18000],
//                   // name: 'RSB Berkane'
//                 },
//                 {
//                   value: [5000, 14000, 28000, 26000, 42000, 21000],
//                   // name: 'Moyenne de ligne'
//                 }
//               ]
//             }
//           ]
//         };
//         myChart1.setOption(option1);
//       break;
// case 'DO_FILTER':

// break;

// default:
// break;
// }
// }




}
