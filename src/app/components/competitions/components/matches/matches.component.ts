import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../services/competitions.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  selectedFile: File | undefined;  
  constructor( private competitionsService : CompetitionsService) { }

  ngOnInit(): void {

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.competitionsService.uploadCsv(this.selectedFile).subscribe(
        (response) => {
          // Handle response after successful upload
          console.log('File uploaded successfully!', response);
        },
        (error) => {
          // Handle error if upload fails
          console.error('Error uploading file:', error);
        }
      );
    }
  }
  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
  // uploadFile_Matches() {
  //   if (this.selectedFile) {
  //     this.competitionsService.uploadFileCsv(this.selectedFile).subscribe(
  //       (data) => {
  //         console.log('Upload successful:', data);
  //         window.location.reload();
  //       },
  //       (error) => {
  //         console.error('Error uploading file:', error);
  //       });
  //   } else {
  //     console.error('No file selected.');
  //   }
  // }
  


 

}
