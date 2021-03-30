import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Words } from '../words';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {
  newQuotes=[] as any
  
newQuote = new Words(0, "", " ", 0,0 , " ");
@Output() createdQuote = new EventEmitter<any>();
constructor(){

}
ngOnInit(){
  
}

addQuotes(value:any){
  this.createdQuote.emit(value)
}
}