import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-table-statistique-formation',
  templateUrl: './table-statistique-formation.component.html',
  styleUrls: ['./table-statistique-formation.component.css']
})
export class TableStatistiqueFormationComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  }

  
  ngOnInit(): void {
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
  }
 

}
