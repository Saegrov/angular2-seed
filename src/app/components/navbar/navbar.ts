import {Component} from '@angular/core';
import {RouterLink, Router} from '@angular/router-deprecated';

@Component({
  selector: 'navbar',
  templateUrl: 'app/components/navbar/navbar.html',
  styles: [require('./navbar.scss')],
  directives: [RouterLink]
})
export class NavbarComponent {
  router:Router;

  constructor(_router:Router) {
    this.router = _router;
  }

  ngOnInit() {
    console.log(this.router.currentInstruction);
  }
}

