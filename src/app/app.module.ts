import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PiecesService } from './pieces.service';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [PiecesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
