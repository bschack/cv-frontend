import { Component, Input } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { SkillSection } from '../../../cv.types';
import { formatList } from '../../../helper/formatters';

@Component({
  selector: 'skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss'
})
export class SkillsSection {
  @Input() skills: SkillSection[] = [];

  constructor(private navService: NavigationService) {}

  formatList = formatList;

  isVisible(sectionName: string): boolean {
    return !this.navService.selectedSection() || this.navService.selectedSection() === sectionName;
  }
}
