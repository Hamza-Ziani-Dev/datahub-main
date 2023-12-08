import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as echarts from "echarts";

@Component({
  selector: 'app-defensive',
  templateUrl: './defensive.component.html',
  styleUrls: ['./defensive.component.css']
})
export class DefensiveComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  }
  ngOnInit() {
    this.actions("CREATE_CHART_Defensive");
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
  }

 

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_Defensive":
        const myChart = echarts.init(document.getElementById("chart-defensive"));
       const option = {
          legend: {
            title: ["Man City", "Premier Division Average"],
            bottom: 0,
            left: "right",
           
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "Goals per Game", max: 6500 },
              { name: "Expected Goals per Game", max: 16000 },
              { name: "Shots per Game", max: 30000 },
              { name: "Shots On Target Ratio %", max: 38000 },
              { name: "Dribbles per Game", max: 52000 },
              { name: "Cross Completion", max: 25000 },
              { name: "Pass Completion Ratio (%)", max: 25000 },
               { name: "Fouls Against per Game", max: 39000 },
            ],
            // radius: 100,
            // center: ["50%", "50%"],
          },
          series: [
            {
              type: "radar",
              areaStyle: {},
              // itemStyle: {
              //   color:"#E55C00",
              // },
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000, 20000, 35000],
                  name: "Man City",
                  itemStyle: {
                    color: "#E55C00",
                  },
                },
                {
                  value: [
                    5000, 14000, 28000, 26000, 42000, 21000, 20000, 35000,
                  ],
                  name: "Premier Division Average",
                  itemStyle: {
                    color: "#fbb034",
                  },
                },
              ],
            },
          ],
        };
        myChart.setOption(option);
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
