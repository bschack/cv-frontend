import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'bio-section',
  standalone: true,
  templateUrl: './bio-section.html',
  styleUrl: './bio-section.scss'
})
export class BioSection {
  @Input() bio = '';

  constructor(private navService: NavigationService) {}

  get isVisible(): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === 'bio';
  }
}
