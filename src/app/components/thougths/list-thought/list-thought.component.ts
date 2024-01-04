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
      model: 'model1'
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quas numquam voluptatem voluptates hic aperiam nesciunt aut doloremque quisquam, laborum est delectus fuga, possimus illum tempora mollitia quo repellendus dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quas numquam voluptatem voluptates hic aperiam nesciunt aut doloremque quisquam, laborum est delectus fuga, possimus illum tempora mollitia quo repellendus dignissimos!!',
      authorship: 'Componente Filho',
      model: 'model3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
