import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as echarts from "echarts";
import { TeamsService } from 'src/app/components/datahub/components/teams/service/teams.service';
@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {
  activeButton: string = 'XG'; 
  constructor(
    private teamsService :TeamsService,
    private dialogRef: MatDialogRef<DistributionComponent> 
    ){
  }
  treeData : any;
  setActiveButton(button: string): void {
    this.activeButton = button;
  }
  ngOnInit() {
    
    this.getRadarTreeMap();
  } 
  

  getRadarTreeMap(){
    this.teamsService.getTreeMapData().subscribe((res)=>{
     this.treeData = res;
      this.actions("CREATE_CHART_DISTRIBUTION");
      // console.log('====================================');
      // console.log(this.treeData);
      // console.log('====================================');
    })
  }
  closeDialog(): void {
    this.dialogRef.close();
  }



  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_DISTRIBUTION":
        const myChart1 = echarts.init(document.getElementById("chart-distribution"));
        const option1 ={
          title: {
            text: 'Distribution XG (400 minutes de jeu)',
            left: 'center',
            textStyle: {
              fontWeight: 'bold',
              fontSize: 12,
            }
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
                      value: 10
                    },
                    {
                      name: 'Herve Guy',
                      value: 20
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
                    },
                    {
                          name: 'H.Reda',
                          value: 20
                    },
                    {
                          name: 'H.Hedraf',
                          value: 20
                    },
                    {
                          name: 'M.Metwali',
                          value: 90
                    },
                  ]
                },
                {
                  name: 'C',
                  value: 50,
                  children: [
                    {
                      name: 'M.Louadni',
                      value: 10,
                    },
                    {
                      name: 'A.Karnass',
                       value: 20
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
