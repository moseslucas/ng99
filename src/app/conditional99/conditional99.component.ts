import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional99',
  templateUrl: './conditional99.component.html',
  styleUrls: ['../hello-world/hello-world.component.css']
})
export class Conditional99Component implements OnInit {
  validity: boolean;
  constructor() {
    this.validity =  false;
  }

  ngOnInit() {
  }

}
