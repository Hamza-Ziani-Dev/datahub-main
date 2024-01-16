import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-physique',
  templateUrl: './update-physique.component.html',
  styleUrls: ['./update-physique.component.css']
})
export class UpdatePhysiqueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
