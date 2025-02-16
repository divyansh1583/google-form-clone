import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
export interface Form {
  id: string;
  name: string;
  createdAt: Date;
  responseCount: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatCardModule,RouterModule,CommonModule,MatButtonModule]
})
export class DashboardComponent implements OnInit {
  forms$: Observable<Form[]>;
  router=inject(Router);
  private auth = inject(Auth);
  constructor() {
    this.forms$ = new Observable<Form[]>();
  }
  
  ngOnInit() {
    this.forms$ = new Observable<Form[]>(observer => {
      observer.next([
      { id: '1', name: 'Form 1', createdAt: new Date(), responseCount: 10 },
      { id: '2', name: 'Form 2', createdAt: new Date(), responseCount: 20 },
      { id: '3', name: 'Form 3', createdAt: new Date(), responseCount: 30 }
      ]);
      observer.complete();
    });
  }

  navigateToForm(id: number) {
    this.router.navigate(['/forms/edit', id]);
  }
  
  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log(error);
    });
  }
}

