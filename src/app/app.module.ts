import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
