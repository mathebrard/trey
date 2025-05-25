import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from '../../../../core/components/image/image.component';
import { Project } from '../../../../models/projet.model';
import { ProjectService } from '../../../../services/project.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

type ProjectLine =
  | { type: 'single'; p: Project }
  | { type: 'pair'; p1: Project; p2?: Project; isLargeBefore: boolean };

@Component({
  selector: 'app-projet',
  imports: [NavbarComponent, ImageComponent, CommonModule, HttpClientModule],
  standalone:true,
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss',
})
export class ProjetComponent implements OnInit {
  projetsAffichage: ProjectLine[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.projetsAffichage = this.organiserAffichage(data);
      console.log(this.projetsAffichage)
    });
  }

  private organiserAffichage(projects: Project[]): ProjectLine[] {
  const affichage: ProjectLine[] = [];
  const queue: Project[] = [];

  // Étape 1 : Séparer les projets fullWidth et les autres
  for (const p of projects) {
    if (p.fullWidth) {
      affichage.push({ type: 'single', p });
    } else {
      queue.push(p);
    }
  }

  // Étape 2 : Intercaler les fullWidth dans le bon ordre
  let pairIndex = 0;
  let fullIndex = 0;
  let isLargeBefore = true;
  const mixedAffichage: ProjectLine[] = [];

  const fulls = affichage.filter(p => p.type === 'single') as { type: 'single'; p: Project }[];

  for (let i = 0; i < queue.length; i += 2) {
    const p1 = queue[i];
    const p2 = queue[i + 1];

    mixedAffichage.push({
      type: 'pair',
      p1,
      p2,
      isLargeBefore
    });

    isLargeBefore = !isLargeBefore;

    // insérer un fullwidth après chaque pair, s’il y en a
    if (fullIndex < fulls.length) {
      mixedAffichage.push(fulls[fullIndex]);
      fullIndex++;
    }
  }

  // Si fullWidth restants, les ajouter
  while (fullIndex < fulls.length) {
    mixedAffichage.push(fulls[fullIndex]);
    fullIndex++;
  }

  return mixedAffichage;
}

}

