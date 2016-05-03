import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styles: [require('./about.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class About {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
