import { Component, Input } from '@angular/core';
import { ChangelogEntry } from '../changelog-entry.type';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent {

  @Input() changelog: ChangelogEntry[];

  constructor() { }

}
