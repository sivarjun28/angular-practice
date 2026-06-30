import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  user = {

    name: 'siva',

    designation: 'Software Engineer',

    email: 'siva@gmail.com',

    experience: '1 Year',

    skills: [

      'Angular',

      'Java',

      'Spring Boot'

    ]

  };
}
