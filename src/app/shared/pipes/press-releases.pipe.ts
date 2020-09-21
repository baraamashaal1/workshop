import {Pipe, PipeTransform} from '@angular/core';
import {Articles} from '../interfaces/pressReleases.interface';

@Pipe({
  name: 'pressReleases'
})
export class PressReleasesPipe implements PipeTransform {

  transform(releases: Articles[], filters: Articles): Articles[] {
    if (!releases || !filters) {
      return releases;
    }
    const filterKeys = Object.keys(filters) as Array<keyof typeof filters>;
    return releases.filter(release => {
      let matched = true;
      for (const filter of filterKeys) {
        if (filters[filter] && release[filter] !== filters[filter]) {
          matched = false;
          break;
        }
      }
      if (matched) {
        release.publishedAt = new Date(release.publishedAt);
      }
      return matched;
    });
  }

}
