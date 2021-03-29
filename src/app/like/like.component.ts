import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class likeComponent implements OnInit {
  numberOfLikes: number=0;
likeButtonClick(){
this.numberOfLikes++;
}
 dislikeButtonClick(){
  this.numberOfLikes--;
 }



}

