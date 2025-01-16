import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-form-creation',
  imports: [MatToolbarModule, MatTabsModule],
  template: `
      <mat-toolbar>
              Row1 title
            </mat-toolbar>
          <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
            <mat-tab label="Questions"> Content 1 </mat-tab>
            <mat-tab label="Responses"> Content 2 </mat-tab>
            <mat-tab label="Settings"> Content 3 </mat-tab>
          </mat-tab-group>
  `,
  styles: `
  @use '@angular/material' as mat;

// Customize the entire app. Change :root to your selector if you want to scope the styles.
:host {
  @include mat.tabs-overrides((
    background-color:--mat-sys-surface
  ));
  @include mat.toolbar-overrides((
    container-background-color:--mat-sys-surface
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
