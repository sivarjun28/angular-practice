import { Component } from '@angular/core';
interface Blog {

  id: number;
  title: string;
  author: string;
  category: string;

}
@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
})
export class PostList {
  blogs: Blog[] = [

    {

      id: 1,

      title: 'Angular Standalone Components',

      author: 'John',

      category: 'Angular'

    },

    {

      id: 2,

      title: 'Angular Routing',

      author: 'Alex',

      category: 'Angular'

    },

    {

      id: 3,

      title: 'Angular 20 Features',

      author: 'David',

      category: 'Angular'

    }

  ];

}