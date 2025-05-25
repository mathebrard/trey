import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../../models/projet.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.projectService.getProjectBySlug(slug).subscribe(project => {
        this.project = project;
      });
    }
  }
}
