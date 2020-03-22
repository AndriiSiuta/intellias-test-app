import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { map } from 'rxjs/operators';

export interface IPostsEntity {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })

export class PostsService {
  posts$ = new BehaviorSubject<IPostsEntity[]>([]);

  loadPosts() {
    this.http.get<IPostsEntity[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map((response) => this.posts$.next(response))).subscribe();
  }

  getPosts(): Observable<IPostsEntity[]> {
    return this.posts$.asObservable();
  }

  addPost(post: IPostsEntity) {
    this.http.post<IPostsEntity[]>('https://jsonplaceholder.typicode.com/posts', post).pipe(
      map((response) => this.posts$.next([post, ...this.posts$.getValue()]))
    ).subscribe((response) => console.log('resp', response));
  }

  deletePost(id: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
      map(() => this.posts$.next([...this.posts$.getValue().filter((post) => {
        console.log('post id', post.id, id)
        return post.id !== id
      })]))
    ).subscribe((resp) => console.log(resp))
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
