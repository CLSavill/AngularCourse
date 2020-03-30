import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // Using a HTML element selector, preferred for components
  //selector: '[app-servers]', // Using an attribute selector
  selector: '.app-servers', // Using a class selector
  templateUrl: './servers.component.html', // Using an external file is preferred.
  /* template: `
  <app-server></app-server>
  <app-server></app-server>`, // The backtick (`) allows for multiline strings. */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false; // Used in property binding via [attribute]="propertyName" syntax.
  serverCreationStatus = 'No new server was created.';
  serverName = 'Default';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() { // Used in event binding via (eventName)="functionName" syntax.
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created.';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // Casting required to ensure TypeScript knows what type on HTML element we are dealing with.
  }
}
