import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-char-counter',
  templateUrl: './char-counter.component.html',
  styleUrls: ['./char-counter.component.css']
})
export class CharCounterComponent implements OnInit {

  @Input() text?: string;
  @Input() max!: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcRemaining(): number {
    return this.text? this.max - this.text.length: this.max;
  }

}
