import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'app-form-title-input',
  templateUrl: './form-title-input.component.html',
  styleUrls: ['./form-title-input.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TextFieldModule
  ]
})
export class FormTitleInputComponent {
  @Input() label = 'Form title';
  @Input() placeholder = 'Untitled form';
  @Input() isDescription = false;
  @Input() value = '';

  isToolbarVisible = false;

  onFocus() {
    this.isToolbarVisible = true;
  }

  onBlur() {
    this.isToolbarVisible = false;
  }
} 