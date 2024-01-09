import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as echarts from "echarts";

@Component({
  selector: 'app-dialog-distribution',
  templateUrl: './dialog-distribution.component.html',
  styleUrls: ['./dialog-distribution.component.css']
})
export class DialogDistributionComponent implements OnInit {
  activeButton: string = 'xG';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DialogDistributionComponent> 
  ) {
  
   }

  ngOnInit(): void {
    // console.log(this.data);
    // console.log(this.data?.distribution[1]?.metric);
    // console.log(this.data?.distribution[0]);
    this.actions("CREATE_CHART_DISTRIBUTION");
  }

  // setActiveButton(button: string): void {
  //   this.activeButton = button;
  // }


  closeDialog(): void {
    this.dialogRef.close();
  }

  // actions(CASE: string, RES: any = null) {
  //   switch (CASE) {
  //     case "CREATE_CHART_XG":
  //       const myChart1 = echarts.init(document.getElementById("chart-distribution-xg"));
  //       myChart1.setOption(this.data?.distribution[0]);
  //     break;
  //     case "CREATE_CHART_XA":
  //       const myChart2 = echarts.init(document.getElementById("chart-distribution-xa"));
  //       myChart2.setOption(this.data?.distribution[1]);
  //     break;
  //     case "UPDATE_CHART":
  //       break;
     
  //     case "DO_FILTER":
  //       break;

  //     default:
  //       break;
  //   }
  // }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_XG":
        setTimeout(() => {
          const myChart1 = echarts.init(document.getElementById("chart-distribution-xg"));
          myChart1.setOption(this.data?.distribution[0]);
        }, 1000); 
        break;
      case "CREATE_CHART_XA":
        setTimeout(() => {
          const myChart2 = echarts.init(document.getElementById("chart-distribution-xa"));
          myChart2.setOption(this.data?.distribution[1]);
        }, 1000); 
        break;
        case "CREATE_CHART_Dribbles":
          setTimeout(() => {
            const myChart3 = echarts.init(document.getElementById("chart-distribution-Dribbles"));
            myChart3.setOption(this.data?.distribution[2]);
          }, 1000); 
          break;
      default:
        break;
    }
  }
  
  
  setActiveButton(button: string) {
    this.activeButton = button;
    switch (button) {
      case 'xG':
        // Logic to display dialog for xG
        this.actions('CREATE_CHART_XG');
        break;
      case 'xA':
        // Logic to display dialog for xA
        this.actions('CREATE_CHART_XA');
        break;
        case 'Dribbles':
        // Logic to display dialog for xA
        this.actions('CREATE_CHART_Dribbles');
        break;
      default:
        break;
    }
  }
  

}
