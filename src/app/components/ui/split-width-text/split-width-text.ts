import { Component, Input } from '@angular/core';

@Component({
  selector: 'split-width-text',
  standalone: true,
  templateUrl: './split-width-text.html',
  styleUrl: './split-width-text.scss'
})
export class SplitWidthText {
  @Input() leftText = '';
}
