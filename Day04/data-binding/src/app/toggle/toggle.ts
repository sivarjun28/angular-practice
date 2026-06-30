import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toggle.html',
  styleUrls: ['./toggle.scss']
})
export class Toggle {

  showProfile: boolean = true;

  username: string = 'pravatar';

  bio: string = 'ContentCreator';

  profileImage: string =
    'https://i.pravatar.cc/250';

  imageSize: number = 120;

  isOnline: boolean = true;

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  toggleStatus() {
    this.isOnline = !this.isOnline;
  }

  increaseImageSize() {
    this.imageSize += 20;
  }

  decreaseImageSize() {

    if (this.imageSize > 60) {
      this.imageSize -= 20;
    }
  }
}