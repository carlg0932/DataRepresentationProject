import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../post.service';

@Component({
  selector: 'app-recipe-post',
  templateUrl: './recipe-post.component.html',
  styleUrls: ['./recipe-post.component.css']
})
export class RecipePostComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}
