import { Component, Input, OnInit } from '@angular/core';
import { PiecesService } from '../pieces.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() row = 0;
  @Input() col = 0;

  constructor(private pieces: PiecesService) {}

  ngOnInit() {}

  getPiece(): string {
    if (this.pieces.board[this.row][this.col] === '') return '';
    //console.log(this.pieces.board[this.row][this.col]);
    return this.pieces.board[this.row][this.col];
  }
}
