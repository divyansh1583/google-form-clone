import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
  template: `
    <div class="container">
      <h1>Dashboard</h1>
      <div class="row">
        <div class="col-md-4" (click)="navigateToForm(0)">
          <mat-card appearance="outlined">
          <img mat-card-image src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="Photo of a Shiba Inu">
          </mat-card>
        </div>
        @for (form of forms$ | async; track form) {
          <div class="col-md-4">
            <mat-card appearance="outlined">
              <mat-card-header>
                <mat-card-title>{{ form.name }}</mat-card-title>
                <mat-card-subtitle>Created: {{ form.createdAt | date }}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>Responses: {{ form.responseCount }}</p>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button [routerLink]="['/forms', form.id, 'edit']">Edit</button>
                <button mat-button [routerLink]="['/forms', form.id, 'responses']">View Responses</button>
              </mat-card-actions>
            </mat-card>
          </div>
        }
      </div>
    </div>
    `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    mat-card {
      margin-bottom: 20px;
      cursor: pointer;
    }
    `],
  imports: [MatCardModule,RouterModule,CommonModule,MatButtonModule]
})
export class DashboardComponent implements OnInit {
  forms$: Observable<Form[]>;
  router=inject(Router);
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
}

