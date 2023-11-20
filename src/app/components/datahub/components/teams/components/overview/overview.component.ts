import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['pos', 'teams', 'poits', 'posisionnal','counter', 'play','goals','xga','diffirence'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // Replace this with your actual data source
    const data = [
      { pos: '1', teams: 'RSB BERKANE', poits: '0.16', posisionnal:'81',
      counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
      { pos: '2', teams: 'RSB BERKANE', poits: '0.16', posisionnal:'81',
      counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
      { pos: '3', teams: 'RSB BERKANE', poits: '0.16', posisionnal:'81',
      counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
      { pos: '4', teams: 'RSB BERKANE', poits: '0.16', posisionnal:'81',
      counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
      { pos: '5', teams: 'RSB BERKANE', poits: '0.16', posisionnal:'81',
      counter:'9.65', play:'18',goals:'29', xga:'2.19', diffirence:'3'},
      // Add more data as needed
    ];

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
}
