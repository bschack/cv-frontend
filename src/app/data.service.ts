import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllData } from './cv.types';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  data = signal<AllData | null>(null);

  constructor(private http: HttpClient) { }

  load() {
    this.http.get<AllData>(environment.apiUrl).subscribe((res) => {
      console.log(res);
      this.data.set(res);
      console.log(this.data());
    });
  }
}