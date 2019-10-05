import { M09aula09PostService } from './../../services/m09aula09-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm09aula09-posts',
  templateUrl: './m09aula09-posts.component.html',
  styleUrls: ['./m09aula09-posts.component.css']
})
export class M09aula09PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: M09aula09PostService){
  }

  ngOnInit() {
      this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json()
      })

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id; 
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post) {
      this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
