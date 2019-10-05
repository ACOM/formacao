import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'm09aula03-posts',
  templateUrl: './m09aula03-posts.component.html',
  styleUrls: ['./m09aula03-posts.component.css']
})
export class M09aula03PostsComponent {
  posts: any[];
  constructor(http: Http){
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json()
      })
  }

}
