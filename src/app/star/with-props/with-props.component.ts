import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'with-props',
  template: `
  <i 
  class = "fa-star"
  [class.far] = "!isStarred"
  [class.fas] = "isStarred"
  (click) = "onClicked()"
  >
  </i>
  `,
  styles: []
})
export class WithPropsComponent implements OnInit {

  @Input()
  isStarred: boolean
  
  @Output()
  isStarredChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  onClicked()
  {
    this.isStarred = !this.isStarred
    this.isStarredChange.emit(this.isStarred)
  }

}
