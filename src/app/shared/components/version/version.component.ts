import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VersionService } from './service/version.service';

interface Version {
  version: string;
  title: string;
  news: string;
}

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  version: Version;
  constructor(private VersionService: VersionService, public dialog: MatDialog) {
    this.version = VersionService.getMyVersion();

  }
  close() {
    localStorage.setItem('version', 'off');
  }
}
