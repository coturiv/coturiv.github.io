import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as feather from 'feather-icons';

@Component({
  selector: 'feather-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss']
})
export class FeatherIconComponent implements AfterViewInit {
  @Input()
  icon: string = '';

  ngAfterViewInit() {
    try {
      feather.replace();
    } catch (e) {}
  }
}
