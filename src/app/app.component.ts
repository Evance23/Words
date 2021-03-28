import { Component } from '@angular/core';
import { Words } from './words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Words [];


  constructor(){
    //this.quotes=['Fair is foul and foul is fair', 'Whether you think you can or think you cant, you are right', '“If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.-Nelson Mandela']
  this.quotes=  [
    { author: "Bertolt",
  date:"5/5/2021",
  quote:"Fair is foul and foul is fair."},
  { author: "Nelson Mandela",
  date:"5/5/2021",
  quote:"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart"},
  { author: "Anonymous",
  date:"5/5/2021",
  quote:"Whether you think you can or think you cant, you are right"}]
  
  }
}
