import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getPostsData(): Observable<any> {
    return this.http.get(""); //put MLAB link in quotes here!
  }

  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();


getPosts() {
  return [...this.posts];
}

addPost(title: string, content: string): Observable<any> {
  const post: Post = {title: title, content: content};
  this.posts.push(post);
  console.log(post);
  console.log(this.posts);
  return this.http.post("http://localhost:8081",post);
  //this.postsUpdated.next([...this.posts]);
}

}
