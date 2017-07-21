import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop99',
  templateUrl: './loop99.component.html',
  styleUrls: ['./loop99.component.css',
              '../hello-world/hello-world.component.css']
})
export class Loop99Component implements OnInit {

  superheroes = [];
  apple = [];
  groceryList = [];

  constructor() {
    this.superheroes = [
      'Batnaman',
      'Spider Man',
      'Pink Guy'
    ];

    this.apple = [
      {name: 'Iphone', type:'Smart Phone'},
      {name: 'Macbook Pro', type:'Notebook'},
      {name: 'MacPro', type:'CPU'}
    ];

    this.groceryList = [
      {item: 'Vegetables'},
      {item: 'Pork'},
      {item: 'Flavorings'}
    ];

  }

  ngOnInit() {
  }

}
