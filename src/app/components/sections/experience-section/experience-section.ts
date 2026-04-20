import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { ExperienceItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { SplitWidthText } from '../../ui/split-width-text/split-width-text';
import { HighlightList } from '../../ui/highlight-list/highlight-list';

@Component({
  selector: 'experience-section',
  standalone: true,
  imports: [DateRangeDisplay, SplitWidthText, HighlightList],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss'
})
export class ExperienceSection {
  @Input() experience: ExperienceItem[] = [];

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'experience';
  }
}
