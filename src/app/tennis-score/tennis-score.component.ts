import { Component } from '@angular/core';


@Component({
  // selector: 'app-tennis-score',
  templateUrl: './tennis-score.component.html',
  styleUrls: ['./tennis-score.component.scss'],
})
export class TennisScoreComponent {
  firstPlayerName = '';
  secondPlayerName = '';
  firstPlayerScore = '00';
  secondPlayerScore = '00';

  showMyMessage = false;


  addFirstPlayerName(name: string) {
    this.firstPlayerName = name;
  }

  addSecondPlayerName(name: string) {
    this.secondPlayerName = name;
  }

  increaseFirstPlayerResult() {
    if(this.firstPlayerScore === '00') {
      this.firstPlayerScore = '15';
    } else if (this.firstPlayerScore === '15') {
      this.firstPlayerScore = '30';
    } else if(this.firstPlayerScore === '30'){
      this.firstPlayerScore = '40';
    } else {
      if(this.secondPlayerScore === '40') {
        this.firstPlayerScore = 'AD'
        this.secondPlayerScore = ''
      }
    }
  }

  increaseSecondPlayerResult() {
    if(this.secondPlayerScore === '00') {
      this.secondPlayerScore = '15';
    } else if (this.secondPlayerScore === '15') {
      this.secondPlayerScore = '30';
    } else if(this.secondPlayerScore === '30'){
      this.secondPlayerScore = '40';
    } else {
      if(this.secondPlayerScore === '40') {
        this.secondPlayerScore = 'AD'
        this.firstPlayerScore = ''
      }
    }
  }  

  showMessageSoon() {
    setTimeout(() => {
      this.showMyMessage = true;
    }, 500);
  }

}
