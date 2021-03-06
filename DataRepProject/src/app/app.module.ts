import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing materials for toolbar
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material'; 

  //import datepicker 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";

//importing my components.
import { RecipePostComponent } from './recipe-post/recipe-post.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { PostService } from './post.service';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ReceipeListComponent
  },
  {
    path: 'create',
    component: RecipePostComponent
  },
  {
    path: 'edit/:id',
    component: EditRecipeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ReceipeListComponent,
    RecipePostComponent,
    EditRecipeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
