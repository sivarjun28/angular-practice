import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { UserProfile } from '../../models/user-profile.model';
import { Statistics } from '../../models/statistics.model';
import { Post } from '../../models/post.model';
import { Notification } from '../../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class Dashboard {
  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      'https://dummyjson.com/users/1'
    )
  }
  getRecentPosts(): Observable<Post[]> {
    return this.http
      .get<any>('https://dummyjson.com/posts')
      .pipe(
        map(response =>
          response.posts.slice(0, 5)
        )
      );
  }

  getNotifications(): Observable<Notification[]> {

    return of([

      {
        id: 1,
        message: 'Profile updated'
      },

      {
        id: 2,
        message: 'New comment received'
      },

      {
        id: 3,
        message: 'System maintenance tonight'
      }

    ])

      .pipe(
        delay(1500)

      );

  }


  getStatistics(): Observable<Statistics> {
    return of({
      totalUsers: 1000,
      totalPosts: 250,
      totalNotifications: 30
    })
      .pipe(
        delay(200)
      );
  }
}
