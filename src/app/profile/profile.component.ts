import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
  darkMode = false;
  recommendations = [
    {
      name: 'George Floyd',
      role: 'Senior Software Engineer',
      text: 'I cant breathe',
    },
    {
      name: 'Charlie Kirk',
      role: 'IT Instructor',
      text: 'lorem ipsum dolor',
    },
  ];

  currentSlide = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 4000); // 4 seconds per slide
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.recommendations.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  toggleDarkMode() {
    if (this.darkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
}
