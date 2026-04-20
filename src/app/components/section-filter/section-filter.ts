import { Component, Input } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { SkillSection } from '../../cv.types';

@Component({
  selector: 'section-filter',
  standalone: true,
  templateUrl: './section-filter.html',
  styleUrl: './section-filter.scss'
})
export class SectionFilter {
  @Input() skills: SkillSection[] = [];

  constructor(private navService: NavigationService) {}

  toggleSelection(target: string) {
    this.navService.toggleSelection(target);
  }

  isActive(target: string): string {
    return this.navService.isActive(target);
  }
}
