import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import projectsData from './projects.json';

@Component({
  templateUrl: 'view.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class ViewComponent {
  project: any;
  selectedImageIndex: number | null = null;
  gallery: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const linkParams = this.route.snapshot.paramMap.get('linkParams');
    this.project = projectsData.find(p => p['link-params'] === linkParams);

    if (this.project?.gallery) {
      this.gallery = Object.values(this.project.gallery);
    }
  }

  openImage(index: number) {
    this.selectedImageIndex = index;
  }

  closeModal() {
    this.selectedImageIndex = null;
  }

  prevImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.gallery.length) % this.gallery.length;
    }
  }

  nextImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex + 1) % this.gallery.length;
    }
  }

  get selectedImage(): string | null {
    return this.selectedImageIndex !== null
      ? this.gallery[this.selectedImageIndex]
      : null;
  }
}
