import { Component } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PostOne: Post;
  PostTwo: Post;
  PostThree: Post;
  PostList: Post[];

  constructor() {
    this.PostOne = new Post();
    this.PostTwo = new Post();
    this.PostThree = new Post();
    this.PostOne.title = 'Mon Premier Post';
    this.PostTwo.title = 'Mon Deuxiéme Post';
    this.PostThree.title = 'Encore un Post';

// tslint:disable-next-line: max-line-length
    this.PostOne.content = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
// tslint:disable-next-line: max-line-length
    this.PostTwo.content = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
// tslint:disable-next-line: max-line-length
    this.PostThree.content = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

    this.PostOne.loveIts = 0;
    this.PostTwo.loveIts = 3;
    this.PostThree.loveIts = -1;

    this.PostOne.createdAt = new Date();
    this.PostTwo.createdAt = new Date();
    this.PostThree.createdAt = new Date();

    this.PostList = [this.PostOne, this.PostTwo, this.PostThree];
  }
}
