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
      // new Words(2, 'If you talk to him in his language, that goes to his heart ', 'Nelson Mandela', 0,0, "5/5/2021"),
      // new Words(3, 'Whether you think you can or think you cant, you are right.', 'Anonymous', 0,0, "5/5/2021")
  ];

  constructor(){
    //this.quotes=['Fair is foul and foul is fair', 'Whether you think you can or think you cant, you are right', '“If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.-Nelson Mandela']
  
  
  }
  ngOnInit(){
    // this.quotes=  [
    //   { id: 1,
    //     author:"Bertolt",
    // date: "5/5/2021",
    // quote:"Fair is foul and foul is fair."},
    // { id: 2,
    //   author: "Nelson Mandela",
    // date: "5/5/2021",
    // quote:"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart"},
    // { id: 3,
    //   author: "Anonymous",
    // date:"5/5/2021",
    // quote:"Whether you think you can or think you cant, you are right"}]
  }

  addNewQuote(quotes:Words){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    // quotes.date = new Date(quotes.date)
    
    this.quotes.push(quotes)
}


}
