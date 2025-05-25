import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../../models/projet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() projet1?: Project;
  @Input() projet2?: Project;
  @Input() isLargeBefore: boolean = true;

  constructor(private router: Router) {}

  goToProject(project?: Project) {
  if (project?.slug) {
    this.router.navigate(['/projet', project.slug]);
  }
}

}
