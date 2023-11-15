import { animate, style, transition, trigger } from "@angular/animations";

export interface INavbarData {
  routerLink?: string | string[];
  click?: () => {}
  icon?: string;
  label: string;
  expanded?: boolean;
  display?: boolean;
  permission?: boolean;
  items?: INavbarData[];
}

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('350ms',
      style({ opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('350ms',
      style({ opacity: 0 })
    )
  ])
])