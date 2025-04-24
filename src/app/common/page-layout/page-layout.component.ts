import { Component } from "@angular/core";

@Component({
  selector: 'app-page-layout',
  imports: [],
  host: {
    class: 'd-block bg-main-background w-100 h-100'
  },
  template: `
    <ng-content select="[header]"></ng-content>

    <div class="@container">
      <div class="px-20">
        <ng-content select="[body]"></ng-content>
      </div>
    </div>

    <ng-content select="[footer]"></ng-content>

  `,
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {}
