import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private currentUserSubject =
    new BehaviorSubject<User | null>(null);

  currentUser$ =
    this.currentUserSubject.asObservable();


  login(username: string) {

    const user: User = {
      id: Date.now(),
      username
    };

    this.currentUserSubject.next(user);
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}
