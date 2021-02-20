import { Component } from '@angular/core';
import { ChangelogEntry } from './changelog-entry.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  major = 0;
  minor = 0;
  patch = 1;

  changelog: ChangelogEntry[] = [
    { type: 'patch', old: 0, new: 1 }
  ];

  incrementMajor(): void {
    this.major++;
    this.minor = 0;
    this.patch = 0;
    this.changelog.push({ type: 'major', old: this.major - 1, new: this.major });
  }

  incrementMinor(): void {
    this.minor++;
    this.patch = 0;
    this.changelog.push({ type: 'minor', old: this.minor - 1, new: this.minor });
  }

  incrementPatch(): void {
    this.patch++;
    this.changelog.push({ type: 'patch', old: this.patch - 1, new: this.patch });
  }
}
