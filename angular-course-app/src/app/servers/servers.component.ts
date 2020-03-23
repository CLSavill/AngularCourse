import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // Using a HTML element selector, preferred for components
  //selector: '[app-servers]', // Using an attribute selector
  selector: '.app-servers', // Using a class selector
  //templateUrl: './servers.component.html', // Using an external file is preferred.
  template: `
  <app-server></app-server>
  <app-server></app-server>`, // The backtick (`) allows for multiline strings.
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
