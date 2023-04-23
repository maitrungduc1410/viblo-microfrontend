import { Component, ElementRef, Input } from '@angular/core';
import { App, createApp } from 'vue';

@Component({
  selector: 'app-vue-wrapper',
  templateUrl: './vue-wrapper.component.html',
  styleUrls: ['./vue-wrapper.component.scss']
})
export class VueWrapperComponent {
  @Input() component: any;
  app!: App<Element>;

  constructor(private readonly host: ElementRef) {}

  ngAfterViewInit() {
    this.app = createApp(this.component)
    this.app.mount(this.host.nativeElement)
  }

  ngOnDestroy() {
    this.app.unmount()
  }
}
