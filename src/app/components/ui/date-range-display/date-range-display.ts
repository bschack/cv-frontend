import { Component, Input } from '@angular/core';
import { DateRange } from '../../../cv.types';
import { formatDateRange } from '../../../helper/formatters';

@Component({
  selector: 'date-range-display',
  standalone: true,
  templateUrl: './date-range-display.html',
  styleUrl: './date-range-display.scss'
})
export class DateRangeDisplay {
  @Input() dateRange!: DateRange;

  formatDateRange = formatDateRange;
}
