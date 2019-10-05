import { BadInput } from './../../common/bad-input';
import { M09aula13PostService } from './../../services/m09aula13-post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';

@Component({
  selector: 'm09aula13-posts',
  templateUrl: './m09aula13-posts.component.html',
  styleUrls: ['./m09aula13-posts.component.css']
})
export class M09aula13PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: M09aula13PostService){
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
        (error: AppError) => {
          if (error instanceof BadInput){
            //this.form.setErrors(error.originalError);
          }
          else{
            alert('An unexpected error occurred.');
            console.log(error);
          }
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
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted.');
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
      })
  }

}
