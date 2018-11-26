import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//import { HoverModule as RunModule} from './hover/hover.module';
// import { StarModule as RunModule} from './star/star.module';
import { TodoModule as RunModule} from './todo/todo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    
    RunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
