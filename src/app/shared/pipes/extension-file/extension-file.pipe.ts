import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extensionFile'
})
export class ExtensionFilePipe implements PipeTransform {

  transform(extension: string): string {
    let label = '';

    switch (extension) {
      case 'xlsx':
      case 'xls':
        label = 'Excel';
        break;
      case 'doc':
      case 'docx':
        label = 'Word';
        break;
      case 'pdf':
        label = 'PDF';
        break;
      case 'jpg':
      case 'jpeg':
      case 'png':
        label = 'Image';
        break;
      default:
        label = 'File';
    }
    return label;
  }
}
