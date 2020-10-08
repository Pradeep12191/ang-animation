import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { sliderState } from './animations/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [sliderState]
})
export class AppComponent {
  title = 'ios-animation';

  getAnimationState(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData.animation;
    if (routeData) {
      return routeData.page;
    }
    return '';
  }
}
