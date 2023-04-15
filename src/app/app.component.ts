import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63,
  ];

  constructor() {}

  getCol(ii: number) {
    return (ii % 8) + 1;
  }

  getRow(ii: number) {
    return Math.floor(ii / 8) + 1;
  }

  isEven(ii: number) {
    if (Math.floor(ii / 8) % 2 === 0) {
      return ii % 2 !== 0;
    } else {
      return ii % 2 === 0;
    }
  }

  getPiece() {}

  dragstart() {
    console.log('drag start');
  }
}
