import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from '../models/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/data/projets.json');
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.slug === slug))
    );
  }
}
