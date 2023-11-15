import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CharedService } from 'src/app/services/chared.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFileComponent implements OnInit {
  @Input() Label: string;
  @Output() isSelected = new EventEmitter<File>();
  @ViewChild('fileInput') fileInput: ElementRef;
  fileExtension: string = 'unknown';
  isLoading: boolean = false;
  @Input() dateUpload: moment.Moment = null;
  hasFile: boolean = false;
  @Input() fileUrl: string = null;
  file: File = null;
  fillColor: string = 'var(--primary-color)';
  // ERROR #ea3143
  // DONE  #188243
  constructor(private charedService: CharedService) { }

  ngOnInit() {
    if (this.fileUrl != null) {
      this.hasFile = true;
      this.fileExtension = this.charedService.getFileType(this.fileUrl);
    }
  }
  actions(TYPE: string, REQUEST: any = null) {
    switch (TYPE) {
      case 'SELECT__FILE':
        this.fileInput.nativeElement.click();
        break;
      case 'OPEN_FIE':
        this.charedService.openFile(this.fileUrl, this.fileExtension);
        break;
      case 'DOWNLOAD_FIE':
        var a = document.createElement('a');
        a.href = this.fileUrl;
        a.target = "_blank";
        a.download = `${this.Label}`;
        a.click();
        break;
      case 'DELETE_FIE':
        this.hasFile = false;
        this.fileUrl = null;
        this.file = null;
        this.isSelected.emit(null);
        break;
      case 'GET_FIE':
        let file = REQUEST.target.files[0];
        if (![undefined, null, ""].includes(file)) {
          let size = this.charedService.getSizeOfFile(file);
          if (size > 1006967) {
            this.charedService.openSnackBar('success');
            this.charedService.openSnackBar('error-file', `Taille d\'image invalide, valide moins de 10 Mo !`);
            this.hasFile = false;
          } else {
            this.charedService.toBase64(file).then((res: string) => {
              this.fileUrl = res;
            }).catch(err => {
              this.charedService.openSnackBar('error-file', 'Formt d\'image invalide  !');
              this.hasFile = false;
            });
            this.hasFile = true;
            this.dateUpload = moment();
            this.file = file;
            this.fileExtension = this.charedService.getFileType(this.file);
            this.isSelected.emit(file);
          }
        }
        break;
      default:
        break;
    }
  }

}
