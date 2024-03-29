import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: 'I love Code',
    authorship: 'Kaue',
    model: 'model2'
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if(this.thought.content.length >= 256) {
      return "thought-g"
    }
    return "thought-p"
  }

}
