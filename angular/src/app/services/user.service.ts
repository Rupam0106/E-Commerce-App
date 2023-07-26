import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  invalidUserAuth = new EventEmitter<boolean>(false);
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}
}
