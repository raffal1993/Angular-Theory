import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-get-post-put-patch-delete',
  templateUrl: './get-post-put-patch-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetPostPutPatchDeleteComponent {
}
