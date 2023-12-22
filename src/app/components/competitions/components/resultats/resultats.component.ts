import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../services/competitions.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
Resultats :any ;
  constructor(private competitionsService : CompetitionsService) { }

  ngOnInit(): void {
    this.getTableResultats();
  }

  getTableResultats(){
    this.competitionsService.getResultats().subscribe((res)=>{
      this.Resultats = res;
      console.log(this.Resultats); 
    });
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

}
