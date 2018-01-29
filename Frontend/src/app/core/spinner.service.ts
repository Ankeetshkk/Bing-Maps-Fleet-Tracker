import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpinnerService {

  spinning = false;

  constructor() { }

  start() {
      this.spinning = true;
  }

  stop() {
      this.spinning = false;
  }
}