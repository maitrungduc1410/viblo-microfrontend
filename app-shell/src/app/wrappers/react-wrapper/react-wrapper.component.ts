import { Component, ElementRef, Input } from '@angular/core';
import { createElement } from 'react';
// @ts-ignore
import { Root, createRoot } from 'react-dom/client';

@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss'],
})
export class ReactWrapperComponent {
  @Input() component: any;
  root!: Root;

  constructor(private readonly host: ElementRef) {}

  ngAfterViewInit() {
    this.root = createRoot(this.host.nativeElement);
    this.root.render(createElement(this.component));
  }

  ngOnDestroy() {
    this.root.unmount()
  }
}
