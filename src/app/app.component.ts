import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopping-list-app';

  loadedFeature = 'reciepe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
