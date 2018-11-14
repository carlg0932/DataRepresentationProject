import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { RouterModule, Routes, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  post : any = [];
  myTitle : String;
  myContent : String;

  constructor(private service:PostService, private router:Router, private route:ActivatedRoute){}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.myTitle = this.post.title;
      console.log("message" +this.myTitle);

    });
  }
  onEditPost(form: NgForm) {
    this.service.updatePost(this.post._id, form.value.title, form.value.content).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}