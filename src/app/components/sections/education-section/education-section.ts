import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { EducationItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { SplitWidthText } from '../../ui/split-width-text/split-width-text';
import { HighlightList } from '../../ui/highlight-list/highlight-list';

@Component({
  selector: 'education-section',
  standalone: true,
  imports: [DateRangeDisplay, SplitWidthText, HighlightList],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss'
})
export class EducationSection {
  @Input() education: EducationItem[] = [];

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'education';
  }
}
