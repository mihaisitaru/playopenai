import { Component } from '@angular/core';

import { GptModels } from 'src/app/models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ChatGPT - demo';
  public gptModels = GptModels;
}
