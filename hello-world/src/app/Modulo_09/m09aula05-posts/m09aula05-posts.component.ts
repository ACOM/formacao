import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'm09aula05-posts',
  templateUrl: './m09aula05-posts.component.html',
  styleUrls: ['./m09aula05-posts.component.css']
})

export class M09aula05PostsComponent {
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

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
      .subscribe(response => {
        console.log(response.json());
      })
  }
}
