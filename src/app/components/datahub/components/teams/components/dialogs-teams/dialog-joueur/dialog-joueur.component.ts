import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as echarts from "echarts";

@Component({
  selector: 'app-dialog-joueur',
  templateUrl: './dialog-joueur.component.html',
  styleUrls: ['./dialog-joueur.component.css']
})
export class DialogJoueurComponent implements OnInit {
  Data_Efficacite:any;
  Indice_Créativite:any;
  activeLabel: number = 1;
  setActiveLabel(labelNumber: number) {
    this.activeLabel = labelNumber;
  }
  imageUrl: string ="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--fc106789-60ea-4534-ace7-ee4e3247d853/MODRIC_carita_380x501.app.png?preferwebp=true&width=288&height=384";
  URL: string = "https://interface.myteambyfrmf.ma/uploads/datahub/";
  dataSource: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogJoueurComponent>
  ) {}
  ngOnInit() {
    
  }
  actions(CASE: string, RES: any = null) {
    switch (CASE) {

      default:
        break;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
