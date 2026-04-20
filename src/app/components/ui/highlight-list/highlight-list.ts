import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'highlight-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlight-list.html',
  styleUrl: './highlight-list.scss'
})
export class HighlightList {
  @Input() highlights: string[] = [];
}
