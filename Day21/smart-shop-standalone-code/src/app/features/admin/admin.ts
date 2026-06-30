import { Component } from '@angular/core';
interface User {

  id: number;

  name: string;

  role: string;

  status: string;

}
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {

  users: User[] = [

    {
      id: 1,
      name: 'John',
      role: 'Admin',
      status: 'Active'
    },

    {
      id: 2,
      name: 'Alex',
      role: 'Editor',
      status: 'Active'
    },

    {
      id: 3,
      name: 'David',
      role: 'User',
      status: 'Inactive'
    }

  ];
}