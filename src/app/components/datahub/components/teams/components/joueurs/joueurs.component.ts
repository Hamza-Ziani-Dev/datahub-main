import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";
import { TeamsService } from '../service/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  activeLabel: number = 1; // Initially, no label is active
  setActiveLabel(labelNumber: number) {
    this.activeLabel = labelNumber;
  }
  
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
    this.actions("CREATE_CHART_SCATTER1");
    this.actions("CREATE_CHART_SCATTER2");
 
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_SCATTER1":
        const myChart1 = echarts.init(document.getElementById("chart-maitrise"));
        const option1 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                        {
                           value: [10, 100,'Berkan'],
                          name: 'Berkan'
                        },
                         {
                          value: [10, 37],
                          name: 'RCA'
                        },
                         {
                          value: [90, 30],
                          name: 'WAC'
                        },
                         {
                          value: [30, 80],
                          name: 'KAC'
                        },
                         {
                          value: [20, 70],
                          name: 'RSB'
                        },
                        
        
                      ],
              type: 'scatter',
              emphasis: {
                focus: 'self'
              },
              labelLayout: {
          
              },
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
             
            }
          ]
        };
        myChart1.setOption(option1);
      break;
      case "CREATE_CHART_SCATTER2":
        const myChart2 = echarts.init(document.getElementById("chart-gardian"));
        const option2 = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                        {
                           value: [10, 100,'Berkan'],
                          name: 'Berkan'
                        },
                         {
                          value: [10, 37],
                          name: 'RCA'
                        },
                         {
                          value: [90, 30],
                          name: 'WAC'
                        },
                         {
                          value: [30, 80],
                          name: 'KAC'
                        },
                         {
                          value: [20, 70],
                          name: 'RSB'
                        },
                        
        
                      ],
              type: 'scatter',
              emphasis: {
                focus: 'self'
              },
              labelLayout: {
          
              },
              // labelLine: {
              //   show: true,
              //   length2: 10,
              //   // lineStyle: {
              //   //   color: ''
              //   // }
              // },
             
            }
          ]
        };
        myChart2.setOption(option2);
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
