import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-form-creation',
  imports: [MatToolbarModule, MatTabsModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.scss'],
  standalone: true
})
export class FormCreationComponent {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      // console.log(id);
    });
  }
}
