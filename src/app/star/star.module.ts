import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { NoPropsComponent } from './no-props/no-props.component';
import { WithPropsComponent } from './with-props/with-props.component';

@NgModule({
  declarations: [RunComponent, NoPropsComponent, WithPropsComponent],
  imports: [
    CommonModule
  ],
  exports: [RunComponent]
})
export class StarModule { }
