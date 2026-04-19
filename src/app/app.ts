import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { DataService } from './data.service';
import { formatAuthors, formatDateRange, formatList, formatName, formatPhoneNumber } from './helper/formatters';
import { CommonModule } from '@angular/common';
import { Link } from './components/link/link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Link],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv-frontend');
  formatList = formatList;
  formatPhoneNumber = formatPhoneNumber;
  formatDateRange = formatDateRange;
  formatAuthors = formatAuthors;
  formatName = formatName;

  selectedSection: string | null = null;

  toggleSelection(target: string) {
    this.selectedSection = this.selectedSection === target ? null : target;
  }

  isActive(target: string) {
    return this.selectedSection === target ? 'active' : '';
  }

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
