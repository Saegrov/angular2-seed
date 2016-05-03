import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';

import {APP_ROUTES} from './seed-app.routes';
import {NavbarComponent} from './components/navbar/navbar';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [RouterOutlet, NavbarComponent],
  templateUrl: 'app/seed-app.html',
})
@RouteConfig(APP_ROUTES)
export class SeedApp {

  constructor() {}

}
