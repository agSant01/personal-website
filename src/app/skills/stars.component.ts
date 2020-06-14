import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stars',
  template: '<p> {{s}} </p>',
  styles: [`
    p {
      margin: 0px;
      padding: 0px;
   }`
  ],
})
export class StarsComponent implements OnInit {
  @Input() star;
  s: string;

  ngOnInit() {
      this.s = this.getStars();
  }

  getStars(): string {
    let s = '';
    for (let i = 0; i < this.star; i++) {
      s = s + '★';
    }
    return s;
  }

}
