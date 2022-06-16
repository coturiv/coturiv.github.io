import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'showcase',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  @Input()
  project: any;

  openProject() {
    window.open(this.project.link, '_blank');
  }
}
