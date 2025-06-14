import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../../services/project.service';
import { Project } from '../../../../models/projet.model';
import { ImageComponent } from '../../../../core/components/image/image.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  standalone: true,
  imports: [ImageComponent], // ajoute les composants nécessaires
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  blocs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.projectService.getProjectBySlug(slug).subscribe((project) => {
        this.project = project;

        this.blocs = this.buildBlocsFromGallery(project?.gallery || []);
      });
    }
  }

  buildBlocsFromGallery(gallery: string[]): any[] {
    const blocs = [];

    for (let i = 0; i < gallery.length; i += 2) {
      if (i + 1 < gallery.length) {
        blocs.push({
          type: 'pair',
          p1: { mainImage: gallery[i] },
          p2: { mainImage: gallery[i + 1] },
          isLargeBefore: i % 4 === 0 // alterner l’ordre
        });
      } else {
        blocs.push({
          type: 'single',
          p: { mainImage: gallery[i] }
        });
      }
    }

    return blocs;
  }
}
