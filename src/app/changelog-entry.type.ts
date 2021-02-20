export interface ChangelogEntry {
    type: 'major'|'minor'|'patch';
    old: number;
    new: number;
}
