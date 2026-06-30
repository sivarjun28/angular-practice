import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-api',
  imports: [CommonModule],
  templateUrl: './user-api.html',
  styleUrl: './user-api.scss',
})
export class UserApi {
   users;

 constructor(
  private http:HttpClient
 ){
   this.users = toSignal(
     this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
     ),
     {
      initialValue:[]
     }
   );

 }
}
