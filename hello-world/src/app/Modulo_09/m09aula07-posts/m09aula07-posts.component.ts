import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'm09aula07-posts',
  templateUrl: './m09aula07-posts.component.html',
  styleUrls: ['./m09aula07-posts.component.css']
})

export class M09aula07PostsComponent implements OnInit {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http){
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json()
      })

  }
}
