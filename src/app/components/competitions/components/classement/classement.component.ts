import { Component, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { CompetitionsService } from '../services/competitions.service';
@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  isDropdownOpen = false;
  selectedItem: string | null = null;
  selectedOption: string = 'classment';
  selectedOptionChompions :string ='D1'
  displayedColumns: string[] = ['possition', 'equipe','points','matches','n','bp','bc','bd','forme'];
  constructor(private competitionServices:CompetitionsService) { }

  ngOnInit(): void {
    this.getTableClassment();
  }
  getTableClassment(){
    this.competitionServices.getClassment().subscribe((res)=>{
      this.dataSource = res;
    })
  }

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

  //Mat Selected Chompetions
  onSelectionChangeCompetions(): void {
    if (this.selectedOptionChompions === 'D1') {
    } else if (this.selectedOptionChompions === 'D2') {
    }else if(this.selectedOptionChompions === 'Nord'){

    }else if(this.selectedOptionChompions === 'Sud'){
      
    }else if(this.selectedOptionChompions === 'U16'){
      
    }
    else if(this.selectedOptionChompions === 'U17'){
      
    }
    else if(this.selectedOptionChompions === 'U18'){
      
    }else if(this.selectedOptionChompions === 'U19'){
      
    }
  }

}
