import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { PublicationItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { formatAuthors } from '../../../helper/formatters';
import { Link } from '../../link/link';

@Component({
  selector: 'publications-section',
  standalone: true,
  imports: [DateRangeDisplay, Link],
  templateUrl: './publications-section.html',
  styleUrl: './publications-section.scss'
})
export class PublicationsSection {
  @Input() publications: PublicationItem[] = [];

  constructor(private navService: NavigationService) {}

  formatAuthors = formatAuthors;

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'publications';
  }
}
