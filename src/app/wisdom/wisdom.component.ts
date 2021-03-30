import { Component, OnInit } from '@angular/core';
import { Words } from '../words';
@Component({
  selector: 'app-wisdom',
  templateUrl: './wisdom.component.html',
  styleUrls: ['./wisdom.component.css']
})

export class WisdomComponent implements OnInit {
  
  quotes:Words[]=[
    new Words(1, 'Fair is foul and foul is fair.', 'Bertolt ', 0,0,"5/5/2021"),
    new Words(2, 'If you talk to him in his language, that goes to his heart ', 'Nelson Mandela', 0,0, "5/5/2021"),
  ];

  constructor(){
  
  }

  ngOnInit(){
    
  }
 
  recievedQuote(value:any){
    let id = this.quotes.length + 1
    value.id = id
    this.quotes.push(value)
  }

  upvote(quote:Words){
    quote.upvote += 1
  }

  downvote(quote:Words){
    quote.downvote += 1
  }

  deleteQuote(quote:Words){
    let toDelete = this.quotes.indexOf(quote)
    if (toDelete > -1) {
      this.quotes.splice(toDelete)
    }
  }

}
