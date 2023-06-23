import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-typescript-vs-javascript',
  templateUrl: './typescript-vs-javascript.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypescriptVsJavascriptComponent {
}
