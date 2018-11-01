import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipePostComponent } from './recipe-post/recipe-post.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipePostComponent,
    ReceipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
