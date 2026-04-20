import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { AwardItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { SplitWidthText } from '../../ui/split-width-text/split-width-text';
import { HighlightList } from '../../ui/highlight-list/highlight-list';
import { Link } from '../../link/link';

@Component({
  selector: 'awards-section',
  standalone: true,
  imports: [DateRangeDisplay, SplitWidthText, HighlightList, Link],
  templateUrl: './awards-section.html',
  styleUrl: './awards-section.scss'
})
export class AwardsSection {
  @Input() awards: AwardItem[] = [];

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'awards';
  }
}
