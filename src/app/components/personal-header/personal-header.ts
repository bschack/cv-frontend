import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatName, formatPhoneNumber } from '../../helper/formatters';

@Component({
  selector: 'personal-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-header.html',
  styleUrl: './personal-header.scss'
})
export class PersonalHeader {
  @Input() name = '';
  @Input() email = '';
  @Input() phone = '';
  @Input() linkedin = '';
  @Input() github = '';

  formatName = formatName;
  formatPhoneNumber = formatPhoneNumber;
}
