import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FindByKeyPipe } from 'src/app/pipes/find-by-key.pipe';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { categories, projects } from './list.data';
import { Category, Project } from './list.types';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,

    FindByKeyPipe
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  categories: Category[] = categories;
  projects: Project[] = projects;
  filteredProjects: Project[] = projects;

  filters: {
    categorySlug$: BehaviorSubject<string>;
    query$: BehaviorSubject<string>;
    hideCompleted$: BehaviorSubject<boolean>;
  } = {
    categorySlug$: new BehaviorSubject('all'),
    query$: new BehaviorSubject(''),
    hideCompleted$: new BehaviorSubject(false)
  };

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    this._changeDetectorRef.markForCheck();

    // Filter the projects
    combineLatest([this.filters.categorySlug$, this.filters.query$, this.filters.hideCompleted$]).subscribe(
      ([categorySlug, query, hideCompleted]) => {
        // Reset the filtered projects
        this.filteredProjects = this.projects;

        // Filter by category
        if (categorySlug !== 'all') {
          this.filteredProjects = this.filteredProjects.filter((project) => project.category === categorySlug);
        }

        // Filter by search query
        if (query !== '') {
          this.filteredProjects = this.filteredProjects.filter(
            (project) =>
              project.title.toLowerCase().includes(query.toLowerCase()) ||
              project.description.toLowerCase().includes(query.toLowerCase()) ||
              project.category.toLowerCase().includes(query.toLowerCase())
          );
        }

        // Filter by completed
        if (hideCompleted) {
          this.filteredProjects = this.filteredProjects.filter((project) => project.progress.completed === 0);
        }
      }
    );
  }

  /**
   * Filter by search query
   *
   * @param query
   */
  filterByQuery(query: string): void {
    this.filters.query$.next(query);
  }

  /**
   * Filter by category
   *
   * @param change
   */
  filterByCategory(change: MatSelectChange): void {
    this.filters.categorySlug$.next(change.value);
  }

  /**
   * Show/hide completed projects
   *
   * @param change
   */
  toggleCompleted(change: MatSlideToggleChange): void {
    this.filters.hideCompleted$.next(change.checked);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
