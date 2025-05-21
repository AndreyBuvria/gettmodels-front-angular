import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt-block',
  standalone: true,
  templateUrl: './prompt-block.component.html',
  styleUrls: ['./prompt-block.component.scss'],
  imports: [CommonModule]
})
export class PromptBlockComponent implements OnInit {
  categoryGroups: string[][] = [
    ['INTERIOR', 'EXTERIOR', 'MATERIALS'], 
    ['MATERIALS', 'VEHICLES', 'WEAPONRY'], 
    ['INDUSTRIAL', 'FAUNA', 'CHARACTERS'], 
    ['ANATOMY', 'SPORT', 'OTHER'], 
    ['INDUSTRIAL', 'FAUNA', 'CHARACTERS'], 
    ['ANATOMY', 'SPORT', 'OTHER'] 
  ];

  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}