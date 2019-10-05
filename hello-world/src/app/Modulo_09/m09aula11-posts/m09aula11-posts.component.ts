import { M09aula11PostService } from './../../services/m09aula11-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm09aula11-posts',
  templateUrl: './m09aula11-posts.component.html',
  styleUrls: ['./m09aula11-posts.component.css']
})
export class M09aula11PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: M09aula11PostService){
  }

  ngOnInit() {
      this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json()
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id; 
          this.posts.splice(0, 0, post);
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  updatePost(post) {
      this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      })
  }

}
