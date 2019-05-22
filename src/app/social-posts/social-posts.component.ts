import { Component, OnInit } from '@angular/core';
import { Theposts} from "../theposts";


@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  shouldBeHidden: boolean = false;

  posts: Theposts[] = [
    {
      subject: "Cats",
      bodytext: "Cats are cooler than dogs"
    },
    {
      subject: "Snoopy",
      bodytext: "Snoopy is not a cool dog"
    },
    {
      subject: "Tv",
      bodytext: "Game of thrones ending was super lame"
    }

  ];

  constructor() { }

  // toggleSize() {

  // }

  toggleDisplay(): void {
    this.shouldBeHidden = !this.shouldBeHidden;
  }

  onSubmit(form): void {
    this.posts.push({
      subject: form.value.thepostsSubject,
      bodytext: form.value.thepostsBodytext
    })
  }

  removePost(index: number): void {
    this.posts.splice(index,1);
  }

  ngOnInit() {
  }

}
