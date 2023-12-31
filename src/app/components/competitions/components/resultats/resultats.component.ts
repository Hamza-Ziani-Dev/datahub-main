import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../services/competitions.service';
interface Match {
  id: number;
  region: string;
  equipe_domicile: string;
  buts_domicile: number;
  buts_visiteuse: number;
  equipe_visiteuse: string;
  journee: string;
  type_champions: string;
  date: string;
  heure: string;
}
@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
Resultats :any ;
chips = ['J1','J2','J3','J4','J5','J6','J7','J8','J9','J10','J11','J12','J13','J14','J15','J16','J17','J18','J19','J20'];
pageSize = 12; // Number of chips per page
currentPage = 0;
activeIndex: number | null = null;
matches: Match[] = [];
filteredMatches: Match[] = [];
  constructor(private competitionsService : CompetitionsService) { }
  ngOnInit(): void {
      this.competitionsService.getResultats().subscribe((res)=>{
        // this.Resultats = res
        this.matches = res;
        this.setActive(0);
        // console.log(this.setActive); 
      });
  }
  //set Active
  setActive(index: number) {
    this.activeIndex = index;
    const selectedChip = this.chips[index];
    this.filteredMatches = this.matches.filter(match => match.journee === selectedChip.slice(1));
  }
  get visibleChips(): string[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.chips.slice(startIndex, endIndex);
  }
  // function nextPage
  nextPage(): void {
    const totalPages = Math.ceil(this.chips.length / this.pageSize);
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
    }
  }
  // function previousPage
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  isActive: boolean = false;
  toggleActive() {
    this.isActive = !this.isActive;
  }

}
