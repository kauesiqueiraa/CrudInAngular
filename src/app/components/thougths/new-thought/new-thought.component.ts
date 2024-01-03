import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-thought',
  templateUrl: './new-thought.component.html',
  styleUrls: ['./new-thought.component.css']
})
export class NewThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: "Aprendendo Angular",
    authorship: "Dev",
    model: "model1",
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought(){
    alert("new Thought create")
  }

  cancelThought() {
    alert("Thought canceled")
  }
}
