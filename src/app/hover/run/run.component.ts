import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'run',
  template: `
    <h1>{{ title }}</h1>
    <img 
      [class.active] = "isActive"
      [src] = "imageUrl"
      (mouseover) = "isActive = true"
      (mouseout) = "isActive = false"
    >
    <div>
      Number of hovers: {{hoverCounter}}
    </div>
  `,
  styles: [`
    .active {
      border: 2px solid;
    }
  `]
})
export class RunComponent implements OnInit {

  // State (Model)
  title = 'Hover Demo'
  imageUrl = 'https://via.placeholder.com/150x150'
  _isActive = false
  hoverCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  get isActive() {
    return this._isActive
  }

  set isActive(newValue) {
    this._isActive = newValue

    // if(newValue) {
    //   this.hoverCounter++
    // }

    this._isActive && this.hoverCounter++
  }
}
