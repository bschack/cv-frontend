import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  selectedSection = signal<string | null>(null);

  toggleSelection(target: string) {
    this.selectedSection.set(this.selectedSection() === target ? null : target);
  }

  isActive(target: string): string {
    return this.selectedSection() === target ? 'active' : '';
  }
}
