import { Component } from '@angular/core';

@Component({
  // selector: 'app-tennis-score',
  templateUrl: './tennis-score.component.html',
  styleUrls: ['./tennis-score.component.scss'],
})
export class TennisScoreComponent {
  // constructor() {}
  displayValue1: string = '';
  displayValue2: string = '';
  displayCounts: string[] = [];
  getValue1(value1: string) {
    console.log(value1);
    this.displayValue1 = value1;
  }
  getValue2(value2: string) {
    console.log(value2);
    this.displayValue2 = value2;
  }
  public showMyMessage = false;

  showMessageSoon() {
    setTimeout(() => {
      this.showMyMessage = true;
    }, 500);
  }
}
