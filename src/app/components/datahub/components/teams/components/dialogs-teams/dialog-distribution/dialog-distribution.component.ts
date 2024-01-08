import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as echarts from "echarts";

@Component({
  selector: 'app-dialog-distribution',
  templateUrl: './dialog-distribution.component.html',
  styleUrls: ['./dialog-distribution.component.css']
})
export class DialogDistributionComponent implements OnInit {
  activeButton: string = 'XG';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DialogDistributionComponent> 
  ) {
  
   }

  ngOnInit(): void {
    console.log(this.data?.distribution[0]?.metric);
    console.log(this.data?.distribution[1]?.metric);
    
    console.log(this.data?.distribution[0]);
    this.actions("CREATE_CHART_DISTRIBUTION");
  }

  setActiveButton(button: string): void {
    this.activeButton = button;
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

  actions(CASE: string, RES: any = null) {
    switch (CASE) {
      case "CREATE_CHART_DISTRIBUTION":
        const myChart1 = echarts.init(document.getElementById("chart-distribution"));
        myChart1.setOption(this.data?.distribution[0]);
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
