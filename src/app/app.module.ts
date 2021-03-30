import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';
// import { LikeComponent } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { WisdomComponent } from './wisdom/wisdom.component';
// import { likeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    WisdomComponent,
    // likeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // likeComponent,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
