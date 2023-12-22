import { Component, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  isDropdownOpen = false;
  selectedItem: string | null = null;
  // isActive: boolean = false;
  selectedOption: string = 'classment'; 
  displayedColumns: string[] = ['ID', 'equipe','matches','v','d','n','bp','bc'];
  constructor() { }

  ngOnInit(): void {
    const data = [
      { ID: '1', equipe: 'RCA CASA',matches:'3',v: '2',d:'2' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '2', equipe: 'RCA CASA',matches:'3',v: '2',d:'1' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '3', equipe: 'RCA CASA',matches:'3',v: '2',d:'2' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '4', equipe: 'RCA CASA',matches:'3',v: '2',d:'1' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '5', equipe: 'RCA CASA',matches:'3',v: '1',d:'4' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '6', equipe: 'RCA CASA',matches:'3',v: '2',d:'1' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '7', equipe: 'RCA CASA',matches:'3',v: '2',d:'1' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '8', equipe: 'RCA CASA',matches:'3',v: '2',d:'3' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '9', equipe: 'RCA CASA',matches:'3',v: '2',d:'1' ,n:'U16',
      bp:'9.65',bc:'3'},
      { ID: '10', equipe: 'RCA CASA',matches:'3',v: '2',d:'2' ,n:'U16',
      bp:'9.65',bc:'3'},
    ];
    this.dataSource = new MatTableDataSource(data);
  }
 
  // chips = ['J1','J2','J3','J4','J5','J6','J7','J8','J9','J10','J11','J12','J13','J14','J15','J16','J17','J18','J19','J20'];
  // pageSize = 12; // Number of chips per page
  // currentPage = 0;
  
  // get visibleChips(): string[] {
  //   const startIndex = this.currentPage * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   return this.chips.slice(startIndex, endIndex);
  // }
  // // function nextPage
  // nextPage(): void {
  //   const totalPages = Math.ceil(this.chips.length / this.pageSize);
  //   if (this.currentPage < totalPages - 1) {
  //     this.currentPage++;
  //   }
  // }
  // // function previousPage
  // previousPage(): void {
  //   if (this.currentPage > 0) {
  //     this.currentPage--;
  //   }
  // }
  chips = ['J1','J2','J3','J4','J5','J6','J7','J8','J9','J10','J11','J12','J13','J14','J15','J16','J17','J18','J19','J20'];
  pageSize = 12; // Number of chips per page
  currentPage = 0;
  activeIndex = this.chips.indexOf('J1'); // Set 'J1' as the default active chip

  get visibleChips(): string[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.chips.slice(startIndex, endIndex);
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.chips.length / this.pageSize);
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  setActive(index: number): void {
    this.activeIndex = index === this.activeIndex ? -1 : index;
  }

  isActive(index: number): boolean {
    return index === this.activeIndex;
  }




  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectItem(item: string) {
    this.selectedItem = item;
  }

  //Mat Selected
  onSelectionChange(): void {
    if (this.selectedOption === 'classment') {
    } else if (this.selectedOption === 'calendrier') {
    }
  }

}
