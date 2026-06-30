import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.scss',
})
export class UserPanel {

  username = '';

  currentUser$ : Observable<User | null>
  constructor(private authService: Auth){
    this.currentUser$ = this.authService.currentUser$;
  }

  login(){
    if(!this.username.trim()){
      return;
    }

    this.authService.login(this.username);

    this.username = '';
  }

  logout(){
    this.authService.logout();

  }


}
