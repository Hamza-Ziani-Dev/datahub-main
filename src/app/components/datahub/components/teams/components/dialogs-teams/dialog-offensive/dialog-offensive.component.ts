import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as echarts from "echarts";
@Component({
  selector: 'app-dialog-offensive',
  templateUrl: './dialog-offensive.component.html',
  styleUrls: ['./dialog-offensive.component.css']
})
export class DialogOffensiveComponent implements OnInit {

  isLoading: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DialogOffensiveComponent> 
    ){}
  radarAttaking :any;
  ngOnInit() {
    console.log(this.data?.offensive);
    this.actions("CREATE_CHART_RADAR_ATTACKING");
  }
closeDialog(): void {
  this.dialogRef.close();
}
 actions(CASE: string, RES: any = null) {
  switch (CASE) {
    case 'CREATE_CHART_RADAR_ATTACKING':
      const myChart = echarts.init(document.getElementById('chart-offensive'));
      // const option = {
      //   legend: {
      //     data: ["RSB Berkane", "Moyenne de ligue"],
      //   },
      //   radar: {
      //     // shape: 'circle',
      //     indicator: [
      //       { name: "Buts", max: 6500 },
      //       { name: "XContre", max: 16000 },
      //       { name: "Tirs", max: 30000 },
      //       { name: "Tirs cadre", max: 38000 },
      //       { name: "Contre Prise", max: 52000 },
      //       { name: "Passes Complete", max: 25000 },
      //       { name: "Duels Offensive ", max: 25000 },
      //     ],
      //     radius: 100,
      //     center: ["45%", "60%"],
      //   },
      //   series: [
      //     {
      //       type: "radar",
      //       areaStyle: {},
      //       data: [
      //         {
      //           value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
      //           name: "RSB Berkane",
      //           itemStyle: {
      //             color: "#E55C00",
      //           },
      //         },
      //         {
      //           value: [
      //             5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
      //           ],
      //           name: "Moyenne de ligue",
      //           itemStyle: {
      //             color: "#fbb034",
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // };
      // myChart.setOption(option);
        myChart.setOption(this.data?.offensive);
      break;
    case 'GET':

      break;
    case 'DO_FILTER':

      break;

    default:
      break;
  }
}


}
