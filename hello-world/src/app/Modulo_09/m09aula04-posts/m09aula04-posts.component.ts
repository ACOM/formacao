import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'm09aula04-posts',
  templateUrl: './m09aula04-posts.component.html',
  styleUrls: ['./m09aula04-posts.component.css']
})
export class M09aula04PostsComponent {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http){
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json()
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id; 
        this.posts.splice(0, 0, post);
      })
  }
}
