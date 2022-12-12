import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css'],
  providers: [FileService, ConfirmationService, MessageService],
})
export class FileFormComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(
    private fileService: FileService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}

  myUploader(event: any) {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.fileService.detectCancer(formData).subscribe((response) => {
      if (response === 'No') {
        this.confirmationService.confirm({
          message: 'No presenta cáncer ductal invasivo.',
          accept: () => {
            //Actual logic to perform a confirmation
          },
        });
      }
      if (response === 'Yes') {
        this.confirmationService.confirm({
          message: 'Si presenta cáncer ductal invasivo.',
          accept: () => {
            //Actual logic to perform a confirmation
          },
        });
      }
    });
  }
}
