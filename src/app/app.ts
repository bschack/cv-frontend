import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { DataService } from './data.service';
import { formatDateRange, formatList, formatPhoneNumber } from './helper/formatters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv-frontend');
  formatList = formatList;
  formatPhoneNumber = formatPhoneNumber;
  formatDateRange = formatDateRange;

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

  ngOnInit() {
    this.ds.load();
  }
}
