import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { CommunityItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { SplitWidthText } from '../../ui/split-width-text/split-width-text';
import { HighlightList } from '../../ui/highlight-list/highlight-list';

@Component({
  selector: 'community-section',
  standalone: true,
  imports: [DateRangeDisplay, SplitWidthText, HighlightList],
  templateUrl: './community-section.html',
  styleUrl: './community-section.scss'
})
export class CommunitySection {
  @Input() community: CommunityItem[] = [];

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'community';
  }
}
