import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as echarts from "echarts";
@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.actions("CREATE_CHART_Distribution");
  }



  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_Distribution":
        const myChart1 = echarts.init(document.getElementById("chart-distribution"));
        const option1 ={
          title: {
            text: 'Distribution XG (joueurs a plus de 400 minutes de jeu)',
            left: 'center'
          },
          series: [
            {
              type: 'treemap',
              data: [
                {
                  name: 'A',
                  value: 10,
                  children: [
                    {
                      name: 'E.El Bassil',
                      value: 8
                    },
                    {
                      name: 'Herve Guy',
                      value: 6
                    }
                  ]
                },
                {
                  name: 'B',
                  value: 20,
                  children: [
                    {
                      name: 'J.Kameni',
                      value: 20,
                      children: [
                        {
                          name: 'H.Hannouri',
                          value: 20
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'C',
                  value: 50,
                  children: [
                    {
                      name: 'M.Louadni',
                      value: 10,
                      children: [
                        {
                          name: 'A.Azri',
                          value: 20
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        };
        myChart1.setOption(option1);
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
