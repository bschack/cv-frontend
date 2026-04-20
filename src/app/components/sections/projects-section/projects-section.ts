import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { ProjectItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { SplitWidthText } from '../../ui/split-width-text/split-width-text';
import { HighlightList } from '../../ui/highlight-list/highlight-list';

@Component({
  selector: 'projects-section',
  standalone: true,
  imports: [DateRangeDisplay, SplitWidthText, HighlightList],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss'
})
export class ProjectsSection {
  @Input() projects: ProjectItem[] = [];

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'projects';
  }
}
