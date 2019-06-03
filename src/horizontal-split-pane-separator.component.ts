import { Component, OnInit } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'horizontal-split-separator',
  styles: [`
    :host {
      background-color: #3d3d3d;
      cursor: ns-resize;
      position: relative;
    }
    :host:hover {
      background-color: #4d4d4d;
    }

    .invisible-extension {
      position: absolute;
      height: 100%;
      width: 100%;
      min-height: 7px;
    }

    .handle {
      width: 35px;
      height: 100%;
      background-color: #3c3c3c;
      margin: auto;
    }
  `],
  template: `
    <!-- Used to extend the 'draggable' area in case the separator is too thin,
    so it's not too hard to drag. -->
    <div
      #invisibleExtension
      [hidden]="thickness >= 7"
      class="invisible-extension"></div>

    <div class="handle"></div>
  `,
  host: {
    '[style.height.px]': 'thickness'
  }
})
export class HorizontalSplitSeparatorComponent
  extends SplitSeparatorComponent
  implements OnInit {

  ngAfterViewInit() {
    this.invisibleExtension.nativeElement.style.top =
      -(7 - this.thickness) / 2 + "px";
  }

}
