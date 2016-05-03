import {Component} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

@Component({
  selector: 'navbar',
  templateUrl: 'app/components/navbar/navbar.html',
  styles: [require('./navbar.scss')],
  directives: [RouterLink]
})
export class NavbarComponent {

  constructor() {

  }

  ngOnInit() {

  }
}

