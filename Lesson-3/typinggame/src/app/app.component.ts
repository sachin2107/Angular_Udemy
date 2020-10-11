import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = lorem.sentence();

  enteredText : string = '';

  onInput(value : string) {
    this.enteredText = value;
  }

  compare(letter : string, enteredLetter : string) {
    if( !enteredLetter){
      return 'pending';
    }
    
    return letter === enteredLetter ? 'correct' : 'incorrect';
  }

  onSuccess() : boolean {
    let isValMatched : boolean = false;
    if ( this.enteredText === this.randomText )
    isValMatched = true;
    return isValMatched;
  }
}
