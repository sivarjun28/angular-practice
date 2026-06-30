import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss',
})
export class UserDashboard implements OnInit {
  users: any[] = [];

  loading = true;

  editMode = false;

  selectUserId = 0;

  userData = {
    name: '',
    username: '',
    email: '',
    address: {

      street: '',

      city: ''

    }

  }
  constructor(
    private api: Api
  ) {

  }
  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    this.loading = true;
    this.api.getUsers()
      .subscribe({
        next: (data) => {
          this.users = data.slice(0, 16);
          this.loading = false;
        },
        error: (err) => {
          console.log(err)
          this.loading = false;
        }
      });

  }

  addUser() {
    this.api.addUser(this.userData)
      .subscribe({
        next: (res) => {
          this.users.unshift(res);
          this.userData = {
            name: '',
            username: '',
            email: '',
            address: {

              street: '',

              city: ''

            }
          };
          alert("Movie Added")
        }
      })
  }
  editUser(user: any) {
    this.editMode = true;
    this.selectUserId = user.id;

    this.userData = {

      name: user.name,

      username: user.username,

      email: user.email,

      address: {

        street: user.address?.street || '',

        city: user.address?.city || '',


      }

    }
  }
  updateUser() {
    this.api.updateUser(
      this.selectUserId,
      this.userData
    ).subscribe({
      next: (res) => {
        const index = this.users.findIndex(user => user.id === this.selectUserId);
        this.users[index] = {
          ...res
        };

        this.editMode = false;

        this.userData = {
          name: '',
          username: '',
          email: '',
          address: {

            street: '',

            city: ''
          }
        }
        alert("User Updated")
      }
    });
  }
  patchUser(user: any) {
    this.api.patchUser(user.id, {
      username: 'Sivarjun'
    }).subscribe({
      next: (res) =>{
        user.username = res.username;
        alert("user patched");
      }
    })
  }

  deleteUser(id: number){
    this.api.deleteUser(id)
      .subscribe({
        next: () => {
          this.users = this.users.filter(
            user => user.id !== id
          );
          alert("User Deleted")
        }
      })
  }

}
