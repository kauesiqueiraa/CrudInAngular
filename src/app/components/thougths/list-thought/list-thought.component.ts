import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThoughts = [
    {
      content: 'Father Component',
      authorship: 'Father',
      model: 'model2'
    },
    {
      content: 'Minha propriedade é decorada com @Input()',
      authorship: 'Componente Filho',
      model: 'model2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
