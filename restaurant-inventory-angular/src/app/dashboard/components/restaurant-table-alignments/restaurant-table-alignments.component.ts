import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxCaptureService } from 'ngx-capture';
import { FileServiceService } from 'src/app/service/file-service.service';

import html2canvas from 'html2canvas';

// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'restaurant-restaurant-table-alignments',
  templateUrl: './restaurant-table-alignments.component.html',
  styleUrls: ['./restaurant-table-alignments.component.scss'],
})
export class RestaurantTableAlignmentsComponent {
  capturedImage: any;

  capture() {
    // Select the element that you want to capture
    let captureElement = document.querySelector('#capture') as HTMLElement;

    // Call the html2canvas function and pass the element as an argument
    html2canvas(captureElement).then((canvas) => {
      // Get the image data as a base64-encoded string
      const imageData = canvas.toDataURL('image/png');

      // Do something with the image data, such as saving it as a file or sending it to a server
      // For example, you can create an anchor element and trigger a download action
      const link = document.createElement('a');
      link.setAttribute('download', 'screenshot.png');
      link.setAttribute('href', imageData);
      link.click();
    });
  }

  constructor(
    private captureService: NgxCaptureService,
    private fileService: FileServiceService
  ) {
    this.createTableForm = new FormGroup({
      tableId: new FormControl(''),
      capacity: new FormControl(''),
      serviceCharge: new FormControl(''),
      position: new FormControl(''),
    });
  }

  imgBase64: any = '';
  @ViewChild('screen', { static: true }) screen: any;

  // capture() {
  //   console.log('capture called');

  //   this.captureService
  //     .getImage(this.screen.nativeElement, true)
  //     .pipe(
  //       tap((img) => {
  //         console.log(img);
  //       }),
  //       tap((img) => this.captureService.downloadImage(img))
  //     )
  //     .subscribe();

  //   // this.captureService
  //   //   .getImage(this.screen.nativeElement, true)
  //   //   .toPromise()
  //   //   .then((img: any) => {
  //   //     console.log(img);
  //   //     this.imgBase64 = img;
  //   //     this.save();
  //   //   });
  // }

  DataURIToBlob(dataURI: string) {
    console.log('DataURIToBlob called');

    const splitDataURI = dataURI.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    console.log('end of  DataUriToBlob');

    return new Blob([ia], { type: mimeString });
  }

  save() {
    console.log('Save method called');

    const file = this.DataURIToBlob(this.imgBase64);
    console.log(file);

    const formData = new FormData();

    formData.append('image', file, 'image.png');
    // let url = 'upload2.php';
    // this.http.post(this.ip + url, formData).subscribe((data) => {});
    console.log('formData created and appended');

    console.log(formData);

    this.fileService.addData(formData).subscribe((res: any) => {
      console.log('file sent');
    });
  }

  createTableForm!: any;

  tables: any[] = [];
  table: any = {};

  createTable() {
    this.table = this.createTableForm.value;
    this.tables.push(this.table);
  }

  deleteTable(e: any) {
    // for (let i = 0; i < this.tables.length; i++) {
    //   if (this.tables[i].tableId == e) {
    //     this.tables.splice(i, 1);
    //   }
    // }

    this.tables = this.tables.filter((t) => t.tableId != e);
  }

  saveDiagram() {}
}
