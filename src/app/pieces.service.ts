import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PiecesService {
  board = new Array(9);

  constructor() {
    for (let i = 1; i <= 8; i++) {
      this.board[i] = new Array(9); // Create an inner array with 9 elements for each row
    }

    for (let i = 1; i <= 8; i++) {
      for (let k = 1; k <= 8; k++) {
        this.board[i][k] = '';
      }
    }

    // initial position
    this.board[1][1] = 'rb';
    this.board[1][2] = 'nb';
    this.board[1][3] = 'bb';
    this.board[1][4] = 'qb';
    this.board[1][5] = 'kb';
    this.board[1][6] = 'bb';
    this.board[1][7] = 'nb';
    this.board[1][8] = 'rb';
    this.board[2][1] = 'pb';
    this.board[2][2] = 'pb';
    this.board[2][3] = 'pb';
    this.board[2][4] = 'pb';
    this.board[2][5] = 'pb';
    this.board[2][6] = 'pb';
    this.board[2][7] = 'pb';
    this.board[2][8] = 'pb';
    this.board[7][1] = 'pw';
    this.board[7][2] = 'pw';
    this.board[7][3] = 'pw';
    this.board[7][4] = 'pw';
    this.board[7][5] = 'pw';
    this.board[7][6] = 'pw';
    this.board[7][7] = 'pw';
    this.board[7][8] = 'pw';
    this.board[8][1] = 'rw';
    this.board[8][2] = 'nw';
    this.board[8][3] = 'bw';
    this.board[8][4] = 'qw';
    this.board[8][5] = 'kw';
    this.board[8][6] = 'bw';
    this.board[8][7] = 'nw';
    this.board[8][8] = 'rw';
  }
}
