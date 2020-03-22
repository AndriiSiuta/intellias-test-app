import { InjectionToken } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export const BREAKPOINT_OBSERVER_TOKEN = new InjectionToken('breakpoint-observer');

export function isTabletFactory(observer: BreakpointObserver) {
  return observer.observe(['(max-width: 768px)']).pipe(map((state: BreakpointState) => state.matches));
}
