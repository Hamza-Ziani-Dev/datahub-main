import { Component, Inject, OnInit } from "@angular/core";
import { TeamsService } from "../../../service/teams.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as echarts from "echarts";
@Component({
  selector: "app-dialog-equipe",
  templateUrl: "./dialog-equipe.component.html",
  styleUrls: ["./dialog-equipe.component.css"],
})
export class DialogEquipeComponent implements OnInit {
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogEquipeComponent>
  ) {}
  ngOnInit() {
    console.log(this.data);
    this.actions("CREATE_CHART_RADAR1");
    this.actions("CREATE_CHART_RADAR2");
    this.actions("CREATE_CHART_RADAR3");
    this.actions('CREATE_CHART_SCATTER1');
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  actions(CASE, RES = null) {
    switch (CASE) {
      case "CREATE_CHART_RADAR1":
        setTimeout(() => {
          const ChartOffensive = document.getElementById("chart-offensive-dialog");
            try {
              const myChart = echarts.init(ChartOffensive);
              myChart.setOption(this.data?.data?.attacking);
            } catch (error) {
            }
        }, 200);
        break;
      case "CREATE_CHART_RADAR2":
        setTimeout(() => {
          const ChartDeffensive = document.getElementById("chart-defensive-dialog");
             try {
              const myChart = echarts.init(ChartDeffensive);
              myChart.setOption(this.data?.data?.attacking);
             } catch (error) {
             }
        }, 200);
        break;
      case "CREATE_CHART_RADAR3":
        setTimeout(() => {
          const ChartGenerale = document.getElementById("chart-generale-dialog");
             try {
              const myChart = echarts.init(ChartGenerale);
              myChart.setOption(this.data?.data?.general);
             } catch (error) {
             }
        }, 200); 
        break;
        case "CREATE_CHART_SCATTER1":
        setTimeout(() => {
          const ChartGenerale = document.getElementById("chart-efficacite-dialog");
             try {
              const myChart = echarts.init(ChartGenerale);
              myChart.setOption(this.data?.data?.general);
             } catch (error) {
             }
        }, 200); 
        break;
        
      default:
        break;
    }
  }
  
}
