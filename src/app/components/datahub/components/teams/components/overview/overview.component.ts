import { Component, OnInit, ViewChild } from '@angular/core';
 import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  activeButton: string = 'table'; // Initially, no button is active
  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }

   dataSource: MatTableDataSource<any>;
   displayedColumns: string[] = ['pos', 'teams', 'poits', 'posisionnal','counter', 'play','goals','xga','diffirence'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
   const data = [
     { pos: '1', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '2', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '3', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '4', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '5', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '6', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '7', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '8', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '9', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
     { pos: '10', teams: 'RCA CASA', poits: '0.16', posisionnal:'81',
     counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
   ];
    
   this.dataSource = new MatTableDataSource(data);
   this.dataSource.paginator = this.paginator;
  }
  // actions(CASE:string,RES:any = null){
  //   switch (CASE) {
  //     case 'TAB':
  //        this.tabs = this.tabs.map((tab,index) => Object({
  //         ...tab,
  //         active:index == RES.index
  //        }))
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
