import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello99',
  templateUrl: './hello99.component.html',
  styleUrls: ['./hello99.component.css', '../hello-world/hello-world.component.css']
})
export class Hello99Component implements OnInit {

  message: {}

  constructor() {
    this.message = {
      first: "moses",
      last: "lucas"
    }
  }

  ngOnInit() {
  }

}
