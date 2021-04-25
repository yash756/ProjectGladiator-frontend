import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})
export class PicUploadComponent implements OnInit {

  profilePic: any;//File;
  farmerId: any;//number

  constructor(private farmerService: FarmerService) { }

  ngOnInit(): void {
    this.farmerId = sessionStorage.getItem('farmerId');
  }

  onFileChange(event) {
    this.profilePic = event.target.files[0];
  }

  upload() {
    let formData: FormData = new FormData();
    formData.append('farmerId', this.farmerId);
    formData.append('profilePic', this.profilePic);
    this.farmerService.picUpload(formData).subscribe(response => {
      alert(JSON.stringify(response));
    });
  }

}

