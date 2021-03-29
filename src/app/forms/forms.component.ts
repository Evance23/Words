import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Words } from "../words";
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

    newQuote = new Words(0, ""," "," ");
    @Output() addQuote = new EventEmitter<Words>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
this.newQuote = new Words(0, ""," "," ");
}
    
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  


