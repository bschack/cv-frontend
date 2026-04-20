import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { PersonalHeader } from './components/personal-header/personal-header';
import { SectionFilter } from './components/section-filter/section-filter';
import { BioSection } from './components/sections/bio-section/bio-section';
import { SkillsSection } from './components/sections/skills-section/skills-section';
import { ExperienceSection } from './components/sections/experience-section/experience-section';
import { EducationSection } from './components/sections/education-section/education-section';
import { CertificationsSection } from './components/sections/certifications-section/certifications-section';
import { ProjectsSection } from './components/sections/projects-section/projects-section';
import { AwardsSection } from './components/sections/awards-section/awards-section';
import { PublicationsSection } from './components/sections/publications-section/publications-section';
import { CommunitySection } from './components/sections/community-section/community-section';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    PersonalHeader,
    SectionFilter,
    BioSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    CertificationsSection,
    ProjectsSection,
    AwardsSection,
    PublicationsSection,
    CommunitySection
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  ds = inject(DataService);

  name = computed(() => this.ds.data()?.personal_details.data.name ?? '');
  email = computed(() => this.ds.data()?.personal_details.data.email ?? '');
  phone = computed(() => this.ds.data()?.personal_details.data.phone ?? '');
  linkedin = computed(() => this.ds.data()?.personal_details.data.linkedin ?? '');
  github = computed(() => this.ds.data()?.personal_details.data.github ?? '');

  bio = computed(() => this.ds.data()?.summary.data.summary ?? '');

  skills = computed(() => this.ds.data()?.professional_skills ?? []);

  experience = computed(() => this.ds.data()?.professional_experience.data ?? []);

  education = computed(() => this.ds.data()?.education.data ?? []);

  certifications = computed(() => this.ds.data()?.certifications.data ?? []);

  projects = computed(() => this.ds.data()?.projects.data ?? []);

  awards = computed(() => this.ds.data()?.awards.data ?? []);

  publications = computed(() => this.ds.data()?.publications.data ?? []);

  community = computed(() => this.ds.data()?.community.data ?? []);

  ngOnInit() {
    this.ds.load();
  }
}
