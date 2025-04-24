import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutComponent } from "./common/page-layout/page-layout.component";

@Component({
  selector: 'app-root',
  imports: [PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gettmodels';
}
