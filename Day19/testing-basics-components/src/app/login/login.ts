import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';

  @Output()
  login = new EventEmitter<{
    username: string;
    password: string;
  }>

  submit(){
    this.login.emit({
     username: this.username,
     password: this.password
    })
  }

}
