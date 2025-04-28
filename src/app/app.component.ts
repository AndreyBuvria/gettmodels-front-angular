import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutComponent } from "./common/page-layout/page-layout.component";
import { AppHeaderComponent } from "./common/app-header/app-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLayoutComponent, AppHeaderComponent],
  template: `
    <app-page-layout>
      <div header>
        <app-header></app-header>
      </div>
      
      <div body>
        <router-outlet></router-outlet>
      </div>
      
      <!-- Footer будет добавлен позже вашим коллегой -->
    </app-page-layout>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gettmodels';
}