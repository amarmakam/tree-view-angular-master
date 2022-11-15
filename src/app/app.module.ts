import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
/**
 * https://www.npmjs.com/package/angular-font-awesome
 */
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    // HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
