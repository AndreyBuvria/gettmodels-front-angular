import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutComponent } from './common/page-layout/page-layout.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';
import { PromptBlockComponent } from './common/prompt-block/prompt-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLayoutComponent, AppHeaderComponent, PromptBlockComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gettmodels';
}