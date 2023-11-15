import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DateAgoPipe } from './pipes/date-ago/date-ago.pipe';
import { SafePipe } from './pipes/safe-pipe/safe.pipe';

@NgModule({
  imports: [
    CommonModule, MatSnackBarModule],
  declarations: [
    SnackbarComponent, UploadFileComponent, DateAgoPipe, SafePipe],
  exports: [UploadFileComponent, DateAgoPipe, SafePipe]
})
export class SharedModule { }
