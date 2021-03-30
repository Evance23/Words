import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Words } from '../words';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {
  newQuotes=[]
  quotes:Words[]=[

  new Words(1, 'Fair is foul and foul is fair.', 'Bertolt ', 0,0,"5/5/2021"),
  // new Words(2, 'If you talk to him in his language, that goes to his heart ', 'Nelson Mandela', 0,0, "5/5/2021"),
  // new Words(3, 'Whether you think you can or think you cant, you are right.', 'Anonymous', 0,0, "5/5/2021")
];
//   this.addQuote.emit(this.newQuote);
newQuote = new Words(0, "", " ", 0,0 , " ");

constructor(){

}
ngOnInit(){
  
}


}