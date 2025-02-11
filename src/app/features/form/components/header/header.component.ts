import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface HeaderButton {
  icon: string;
  ariaLabel: string;
  action?: () => void;
  type?: 'icon' | 'flat';
  label?: string;
}

@Component({
  selector: 'app-form-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderComponent {
  leftButtons: HeaderButton[] = [
    { icon: 'folder', ariaLabel: 'Folder button' },
    { icon: 'star_outlined', ariaLabel: 'Star button' }
  ];

  rightButtons: HeaderButton[] = [
    { icon: 'palette', ariaLabel: 'Theme button' },
    { icon: 'visibility', ariaLabel: 'Preview button' },
    { icon: 'undo', ariaLabel: 'Undo button' },
    { icon: 'redo', ariaLabel: 'Redo button' },
    { icon: 'link', ariaLabel: 'Share link button' },
    { icon: 'person_add', ariaLabel: 'Add people button' },
    { icon: 'more_vert', ariaLabel: 'More options button' }
  ];

  publishButton: HeaderButton = {
    type: 'flat',
    label: 'Publish',
    ariaLabel: 'Publish form',
    icon: ''
  };

  // Add any header logic here if needed
} 