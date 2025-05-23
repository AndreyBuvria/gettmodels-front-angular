import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES } from '../models/category.model';

@Component({
  selector: 'app-prompt-block',
  templateUrl: './prompt-block.component.html',
  styleUrls: ['./prompt-block.component.scss'],
  imports: [CommonModule]
})
export class PromptBlockComponent implements OnInit {
  public categories: string[] = [...CATEGORIES];
  public isMenuOpen: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}