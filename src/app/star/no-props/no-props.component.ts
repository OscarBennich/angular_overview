import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-props',
  template: `
  <i 
    class = "fa-star"
    [class.far] = "!isStarred"
    [class.fas] = "isStarred"
    (click) = "isStarred = !isStarred"
  >
  </i>
  `,
  styles: []
})
export class NoPropsComponent implements OnInit {
  isStarred = false;
  
  constructor() { }

  ngOnInit() {
  }

}
