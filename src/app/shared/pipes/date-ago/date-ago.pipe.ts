import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "dateAgo",
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (!value) {
      return 'a long time ago';
    }
    const now = moment();
    const pastMoment = moment(new Date(value)).subtract(-1, 'hours');
    const duration = moment.duration(now.diff(pastMoment));
    let seconds = duration.asSeconds();

    if (seconds < 10) {
      return 'just now';
    } else if (seconds < 60) {
      return 'a moment ago';
    }

    const units = ['second', 'minute', 'hour', 'day', 'month', 'year'];
    const dividers = [60, 60, 24, 30, 12];

    let i = 0;
    for (i = 0; Math.floor(seconds / dividers[i]) > 0; i++) {
      seconds /= dividers[i];
    }

    const plural = Math.floor(seconds) > 1 ? 's' : '';

    return Math.floor(seconds) + ' ' + units[i] + plural + ' ago';
  }
}
