import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl
  private http = inject(HttpClient)

  private _currentUser = signal<User|null>(null)
  private _authStatus = signal<AuthStatus>()

  constructor() { }

  login(email: string, password: string) {
    return of(true)
  }
}
