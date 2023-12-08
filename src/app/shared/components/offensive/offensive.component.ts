import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from 'src/app/components/datahub/components/teams/service/teams.service';
@Component({
  selector: 'app-offensive',
  templateUrl: './offensive.component.html',
  styleUrls: ['./offensive.component.css']
})
export class OffensiveComponent implements OnInit {
  isLoading: boolean;
  constructor(private teamService:TeamsService){
  
  }
  ngOnInit() {
    this.actions("CREATE_CHART");
    this.actions('GET')
    console.log('====================================');
    console.log(this.actions("CREATE_CHART"));
    console.log('====================================');
  }


 actions(CASE: string, RES: any = null) {
  switch (CASE) {
    case 'CREATE_CHART':
      const myChart = echarts.init(document.getElementById('chart-offensive'));
      const option = {
          "title": {
            "text": "Performance for Raja Casablanca (Defending)"
          },
          "legend": {
            "data": [
              "Raja Casablanca",
              "Average"
            ]
          },
          "radar": {
            "indicator": [
              {
                "name": "Buts concédés",
                "max": 78
              },
              {
                "name": "xG",
                "max": 89.05
              },
              {
                "name": "Tacles glissés",
                "max": 418
              },
              {
                "name": "Duels défensifs gagnés, %",
                "max": 65.18963636363637
              },
              {
                "name": "Interceptions",
                "max": 2434
              },
              {
                "name": "Dégagements",
                "max": 1061
              },
              {
                "name": "Fautes",
                "max": 889
              }
            ]
          },
          "series": [
            {
              "name": " ",
              "type": "radar",
              "data": [
                {
                  "value": [
                    49,
                    77.4,
                    332,
                    62.28660714285714,
                    1953,
                    625,
                    862
                  ],
                  "name": "Raja Casablanca"
                },
                {
                  "value": [
                    49,
                    77.4,
                    332,
                    62.29,
                    1953,
                    625,
                    862
                  ],
                  "name": "Average"
                }
              ]
            }
          ]
        }
        myChart.setOption(option);
      break;
    case 'GET':
      // this.teamService.getRadarData().subscribe(
      //   (RES: any) => {
      //     console.log("this.radarDataArray", RES);
      //     this.isLoading = false;
      //     this.actions('CREATE_CHART',RES)
          
      //   },
      //   (ERROR: HttpErrorResponse) => {
      //     this.isLoading = false;
      //   }
      // )
      break;
    case 'DO_FILTER':

      break;

    default:
      break;
  }
}


}
