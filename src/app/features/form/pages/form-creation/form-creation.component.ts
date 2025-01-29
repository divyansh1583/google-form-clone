import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-form-creation',
  imports: [MatToolbarModule, MatTabsModule, MatIconModule, MatButtonModule,MatCardModule],
  template: `
            <mat-toolbar>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve" width="24" height="24">
                <rect x="-4" y="-4" class="st0" fill="none" width="48" height="48"/>
                <g>
                  <polygon class="st1" fill="#56368A" points="24.5,10 30,11 34.5,10 24.5,0 23.2,4.7"/>
                  <path class="st2" fill="#7248B9" d="M24.5,10V0H8.2C6.7,0,5.5,1.2,5.5,2.7v34.5c0,1.5,1.2,2.7,2.7,2.7h23.6c1.5,0,2.7-1.2,2.7-2.7V10H24.5z"/>
                  <path class="st3" fill="#FFFFFF" d="M13.2,28.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C14.5,28.2,13.9,28.9,13.2,28.9z M13.2,23.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4S13.9,23.4,13.2,23.4z M13.2,17.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C14.5,17.3,13.9,17.9,13.2,17.9z M28.2,28.6H16.8 v-2.3h11.4V28.6z M28.2,23.2H16.8v-2.3h11.4V23.2z M28.2,17.7H16.8v-2.3h11.4V17.7z"/>
                </g>
              </svg>
              <span class="ms-2">Untitled Form</span>
              <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <mat-icon class="material-icons-outlined">folder</mat-icon>
            </button>
              <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <mat-icon class="material-icons-outlined">star_outlined</mat-icon>
            </button>
            <span class="example-spacer"></span>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <mat-icon class="material-icons-outlined">palette</mat-icon>
            </button>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <mat-icon class="material-icons-outlined">visibility</mat-icon>
            </button>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <mat-icon class="material-icons-outlined">undo</mat-icon>
            </button>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <span class="material-icons-outlined">redo</span>
            </button>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <span class="material-icons-outlined">link</span>
            </button>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
              <span class="material-icons-outlined">person_add</span>
            </button>
              <button mat-flat-button class="example-icon" aria-label="Example icon-button with menu icon">
                Publish
              </button>
            </mat-toolbar>
          <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
            <mat-tab label="Questions"> 
              <mat-card appearance="outlined">
                <mat-card-header>
                  <mat-card-title> Australian Shepherd</mat-card-title>
                  <mat-card-subtitle>Herding group</mat-card-subtitle>
                </mat-card-header>
                <mat-card-actions>
                  <button mat-button>Learn More</button>
                </mat-card-actions>
              </mat-card>
            </mat-tab>
            <mat-tab label="Responses"> Content 2 </mat-tab>
            <mat-tab label="Settings"> Content 3 </mat-tab>
          </mat-tab-group>

  `,
  styles: `
  @use '@angular/material' as mat;
.example-spacer {
  flex: 1 1 auto;
}
.mat-toolbar{
  @include mat.toolbar-overrides((
    container-background-color: white,
  ));
}

  `
})
export class FormCreationComponent {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      console.log(id);
    });
  }
}
