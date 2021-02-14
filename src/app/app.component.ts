import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infosystems';
  major: number = 0;
  minor: number = 0;
  patch: number = 1;
  changelog = [
    { type: 'patch', old: 0, new: 1 }
  ];

  incrementMajor() {
    this.major++;
    this.minor = 0;
    this.patch = 0;
    this.changelog.push({ type: 'major', old: this.major - 1, new: this.major });
  }

  incrementMinor() {
    this.minor++;
    this.patch = 0;
    this.changelog.push({ type: 'minor', old: this.minor - 1, new: this.minor });
  }

  incrementPatch() {
    this.patch++;
    this.changelog.push({ type: 'patch', old: this.patch - 1, new: this.patch });
  }

}
