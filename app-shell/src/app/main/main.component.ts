import { Component, QueryList, ViewChildren } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChildren('comp') components!: QueryList<any>;
  loaders: any = [];

  constructor(readonly appService: AppService) {}

  async ngAfterViewInit() {
    for (const m of this.appService.authorized_modules) {
      loadRemoteModule(m).then((module) => {
        this.loaders.push(module.default);
      });
    }
  }

  logout() {
    window.location.reload();
  }
}
