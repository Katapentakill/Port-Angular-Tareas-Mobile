import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
})
export class StatusPage {
  constructor() {}

  testClick() {
    console.log('El botón de prueba ha sido clicado.');
  }
}
