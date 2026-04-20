import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { CertificationItem } from '../../../cv.types';
import { DateRangeDisplay } from '../../ui/date-range-display/date-range-display';
import { SplitWidthText } from '../../ui/split-width-text/split-width-text';
import { Link } from '../../link/link';

@Component({
  selector: 'certifications-section',
  standalone: true,
  imports: [DateRangeDisplay, SplitWidthText, Link],
  templateUrl: './certifications-section.html',
  styleUrl: './certifications-section.scss'
})
export class CertificationsSection {
  @Input() certifications: CertificationItem[] = [];

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'certifications';
  }
}
