import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Page {
  path: string;
}

const pages: Page[] = [
  { path: 'life-cycle-hooks' },
  { path: 'two-way-data-binding' },
  { path: 'change-detection-strategy' },
  { path: 'encapsulation' },
  { path: 'directive-vs-component' },
  { path: 'angular-pipe' },
  { path: 'pure-pipe' },
  { path: 'dependency-injection' },
  { path: 'ssr-ssg' },
  { path: 'pwa' },
  { path: 'web-components' },
  { path: 'shadow-dom' },
  { path: 'seo' },
  { path: 'typescript-vs-javascript' },
  { path: 'ecmascript' },
  { path: 'const-vs-let' },
  { path: 'mutable-vs-immutable' },
  { path: 'pure-function' },
  { path: 'higher-order-function' },
  { path: 'anonymous-function' },
  { path: 'inline-function' },
  { path: 'set' },
  { path: 'generic-types' },
  { path: 'utility-types-typescript' },
  { path: 'rwd' },
  { path: 'rem-vs-em' },
  { path: 'css-box-model' },
  { path: 'flex' },
  { path: 'css-preprocessors' },
  { path: 'scss-vs-css' },
  { path: 'scss-mixins' },
  { path: 'design-patterns' },
  { path: 'mvc-mvvm' },
  { path: 'architectures' },
  { path: 'get-post-put-patch-delete' },
  { path: '200-201-202-400-403-404-500' },
  { path: 'request-response' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'navbar navbar-expand-lg bg-dark navbar-dark sticky-top' },
})
export class SidebarComponent {
  readonly pages$: Observable<Page[]> = of(pages);
}
