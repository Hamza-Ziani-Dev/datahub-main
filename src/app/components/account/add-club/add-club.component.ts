import { Component, OnInit, ViewChild } from '@angular/core';
import { authService } from 'src/app/components/auth/service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/interface/user.model';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
  club: any;
  logo = null;
  isLoading = [true, false];
  imgURL;
  logo_base64 = null;
  @ViewChild('clubForm', { static: false }) clubForm: NgForm;
  constructor(private router: Router, private authService: authService) {
    this.club = {};
  }

  ngOnInit() {
    this.authService.getUpdatedUser()
      .subscribe(
        (result: User) => {
          this.imgURL = result.logo;
        }
      );
    this.authService.getUser();
  }
  // toBase64 = (file) => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => resolve(reader.result);
  //   reader.onerror = error => reject(error);
  // });
  onChangeImage(event: any) {
    // this.toBase64(event.target.files[0])
    //   .then(res => {
    //     this.logo_base64 = res;
    //     this.imgURL = res;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.logo = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      this.imgURL = reader.result;
    }
    reader.readAsDataURL(this.logo);
  }
  onSave() {
    this.isLoading[1] = true;
    const controls = Object.values(this.clubForm.controls);
    for (let control of controls) {
      if (control.invalid) {
        this.isLoading[1] = false;
        return;
      }
    }
    this.authService.addEquipe(this.club, this.logo).subscribe(
      (result) => {
        this.router.navigate(['/myaccount/clubs']);
        this.isLoading[1] = false;
      }
    );
  }
}
