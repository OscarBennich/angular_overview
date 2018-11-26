import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'run',
  template: `
    <no-props></no-props>
    <with-props
      [isStarred] = "true"
      (isStarredChange) = "update($event)"
    >
    </with-props>

    <with-props
    [(isStarred)] = "starred"
    >
    </with-props>
    {{starred}}
  `,
  styles: []
})
export class RunComponent implements OnInit {
  starred = false 

  constructor() { }

  ngOnInit() {
  }

  update(starStatus){
    console.log(`Star updated: ${starStatus}`)
    // Update star status in DB here... 
  }
}
