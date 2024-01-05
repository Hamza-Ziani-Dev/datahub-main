import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as echarts from "echarts";
import { TeamsService } from 'src/app/components/datahub/components/teams/service/teams.service';

@Component({
  selector: 'app-defensive',
  templateUrl: './defensive.component.html',
  styleUrls: ['./defensive.component.css']
})
export class DefensiveComponent implements OnInit {
  constructor(
    private teamService:TeamsService,
    private dialogRef: MatDialogRef<DefensiveComponent> 
    ){}
  radarDefending :any;
  ngOnInit() {
   this.getRadarAttacking();
  }
  getRadarAttacking(){
    this.teamService.getRadarData().subscribe((res)=>{
      this.radarDefending = res[0];
      console.log('====================================');
      console.log(this.radarDefending );
      console.log('====================================');
      this.actions("CREATE_CHART_DEFENDING");
    })
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_DEFENDING":
        const myChart = echarts.init(document.getElementById("chart-defensive"));
      const option ={
        legend: {
          data: ["RSB Berkane", "Moyenne de ligue"],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "Buts", max: 6500 },
            { name: "XContre", max: 16000 },
            { name: "Tirs", max: 30000 },
            { name: "Tirs cadre", max: 38000 },
            { name: "Contre Prise", max: 52000 },
            { name: "Passes Complete", max: 25000 },
            { name: "Duels Offensive ", max: 25000 },
          ],
          radius: 100,
          center: ["45%", "60%"],
        },
        series: [
          {
            type: "radar",
            areaStyle: {},
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
                name: "RSB Berkane",
                itemStyle: {
                  color: "#E55C00",
                },
              },
              {
                value: [
                  5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
                ],
                name: "Moyenne de ligue",
                itemStyle: {
                  color: "#fbb034",
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
        // myChart.setOption(this.radarDefending);
      break;

      case "UPDATE_CHART":
        break;
     
      case "DO_FILTER":
        break;

      default:
        break;
    }
  }



}
