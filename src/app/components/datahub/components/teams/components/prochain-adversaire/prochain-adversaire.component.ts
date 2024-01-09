import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../../service/teams.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDistributionComponent } from '../dialogs-teams/dialog-distribution/dialog-distribution.component';
import { DialogDeffensiveComponent } from '../dialogs-teams/dialog-deffensive/dialog-deffensive.component';
import { DialogOffensiveComponent } from '../dialogs-teams/dialog-offensive/dialog-offensive.component';
import { DialogStatistiqueFormationComponent } from '../dialogs-teams/dialog-statistique-formation/dialog-statistique-formation.component';

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
  treeMapData: any;
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
  @ViewChild('chartGeneraleElement', { static: true }) chartGeneraleElement!: ElementRef;
  constructor(
    private teamService: TeamsService,
    private dialogTable : MatDialog,
    private dialog : MatDialog,
  ) {}
  radarDefending :any;
  radarAttaking :any;
  radarGenerale : any;
  teamFormation : any;
ngOnInit() {
    this.getTeamFormation();
    this.getTreeMapData();
    this.getGeneralInfo();
    this.getFixtureInfo();
    this.getRadarProchain();
    this.actions('CREATE_CHART_RADAR1');
}

getTeamFormation(){
this.teamService.getTeamFormation().subscribe((res)=>{
  this.teamFormation = res[0];
  // console.log(this.teamFormation);
  
})
}
getRadarProchain(){
  this.teamService.getRadarData().subscribe((res)=>{
    this.radarAttaking = res[0]?.attacking;
    this.radarDefending = res[0]?.defending;
    this.radarGenerale = res[0]?.general;
    // console.log(this.radarGenerale);
    
    this.actions("CREATE_CHART_DEFENDING");
  })
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
    this.treeMapData = res;
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
      setTimeout(() => {
        const myChart = echarts.init(document.getElementById('chartGeneraleElement'));
        myChart.setOption(this.radarGenerale);
      }, 1000); 
      break;

    // Dialog Responsibilites
    case 'openDialogResponsibilities':
      this.openDialog(this.dialog, DialogDistributionComponent, width, height,'dialog-with-data', { distribution: this.treeMapData });
      break;
  
    // Dialog Deffensive
    case 'openDialogDefensive':
      this.openDialog(this.dialog, DialogDeffensiveComponent, width, height ,'dialog-with-data', { deffensive: this.radarDefending });
      break;
    // Dialog Offensive
    case 'openDialogOffensive':
      this.openDialog(this.dialog, DialogOffensiveComponent, width, height, 'dialog-with-data',{ offensive: this.radarAttaking });
      break;
      // Dialog Statistique Formation
      case 'openDialogStatistiqueFormation':
        this.openDialog(this.dialogTable, DialogStatistiqueFormationComponent, width, height,'dialog-with-data',{ statistiqueFormation: this.teamFormation });
      break;
    default:
      break;
  }
}
openDialog(dialogInstance: any, component: any, width: string, height: string, panelClass?: string, data?: any) {
  const dialogRef = dialogInstance.open(component, {
    width: width,
    height: height,
    panelClass: 'custom-dialog',
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
