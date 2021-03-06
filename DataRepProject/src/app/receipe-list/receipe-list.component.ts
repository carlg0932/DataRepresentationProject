import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){

    this.getRecipeDate();
   
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   getRecipeDate(){
     this.ps.getPostsData().subscribe(data => {
       this.posts = data;
       console.log(data)
     });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
     
   }
  }
