import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatTableDataSource } from "@angular/material/table";
import { CompetitionsService } from "../services/competitions.service";
@Component({
  selector: "app-classement",
  templateUrl: "./classement.component.html",
  styleUrls: ["./classement.component.css"],
})
export class ClassementComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  isDropdownOpen = false;
  selectedItem: string | null = null;
  selectedOption: string = "classment";
  defaultCategory = "electronics";
  // selectedCategory: string;
  selectedCategory: string | null = null;
  selectedJournee: string | null = null;
  categories :any;
  displayedColumns: string[] = ["possition","equipe","points","matches","n","bp","bc","bd","forme",];
  constructor(private competitionServices: CompetitionsService) {}
  ngOnInit(): void {
    this.getFilterDataCategories();
    this.getCategories();
    this.getTableClassment();
  }
  getTableClassment() {
    this.competitionServices.getClassment().subscribe((res) => {
      this.dataSource = res;
    });
  }
  chips = [
    "J1",
    "J2",
    "J3",
    "J4",
    "J5",
    "J6",
    "J7",
    "J8",
    "J9",
    "J10",
    "J11",
    "J12",
    "J13",
    "J14",
    "J15",
    "J16",
    "J17",
    "J18",
    "J19",
    "J20",
  ];
  pageSize = 12; // Number of chips per page
  currentPage = 0;
  activeIndex = this.chips.indexOf("J1"); // Set 'J1' as the default active chip

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
    if (this.selectedOption === "classment") {
    } else if (this.selectedOption === "calendrier") {
    }
  }
 

  //Get All Categories:
  getCategories() {
    return this.competitionServices.getCategoriesChampions()
      .subscribe((categorie: any) => {
        try {
          this.categories = categorie;
        } catch (error) {
          console.log(error);
        }
      });
  }
 // Function to handle changes in the selected category
 changeSelectedCategories($event: any): void {
  this.selectedCategory = $event.value;
  console.log(this.selectedCategory);
  this.getFilterDataCategories();
}

// Function to handle changes in the selected journee
setActive(index: number): void {
  this.activeIndex = index === this.activeIndex ? -1 : index;
  this.selectedJournee = this.chips[index]; 
  this.getFilterDataCategories();
  console.log("Selected Journee Value:", this.selectedJournee);
}

// Get filtered data based on selected category and journee
getFilterDataCategories(): void {
  if (this.selectedCategory && this.selectedJournee) {
    this.competitionServices.getFilterCategorieChampions(
      this.selectedCategory,
      this.selectedJournee
    ).subscribe((res) => {
      console.log("Filtered Data:", res);
    });
  }
}

  // //Get Categories Champions Par Categories:
  // getFilterCategories(key: any) {
  //   return this.competitionServices.getFilterCategorieChampions(key)
  //     .subscribe((res) => {
  //       // this.products = res;
  //       console.log("this Is Filter:", res);
  //     });
  // }

  // //Get Categories Champions Par Journness:
  getFilterCategoriesAndJournee(key: any) {
  
  }
}
