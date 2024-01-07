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
    console.log(this.data?.distribution[0]?.data[0]);
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
        // const option1 ={
        //   title: {
        //     text: 'Distribution XG (400 minutes de jeu)',
        //     left: 'center',
        //     textStyle: {
        //       fontWeight: 'bold',
        //       fontSize: 12,
        //     }
        //   },          
        //   series: [
        //     {
        //       type: 'treemap',
        //       data: [
        //         {
        //           name: 'A',
        //           value: 10,
        //           children: [
        //             {
        //               name: 'E.El Bassil',
        //               value: 10
        //             },
        //             {
        //               name: 'Herve Guy',
        //               value: 20
        //             }
        //           ]
        //         },
        //         {
        //           name: 'B',
        //           value: 20,
        //           children: [
        //             {
        //               name: 'J.Kameni',
        //               value: 20,
        //             },
        //             {
        //                   name: 'H.Reda',
        //                   value: 20
        //             },
        //             {
        //                   name: 'H.Hedraf',
        //                   value: 20
        //             },
        //             {
        //                   name: 'M.Metwali',
        //                   value: 90
        //             },
        //           ]
        //         },
        //         {
        //           name: 'C',
        //           value: 50,
        //           children: [
        //             {
        //               name: 'M.Louadni',
        //               value: 10,
        //             },
        //             {
        //               name: 'A.Karnass',
        //                value: 20
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // };
        // myChart1.setOption(option1);
        myChart1.setOption(this.data?.distribution[0]?.data[0]);
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
