import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleTableComponent } from "./sample-table/sample-table.component";

@Component({
  selector: 'app-root',
  imports: [ SampleTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-simulator';
}
